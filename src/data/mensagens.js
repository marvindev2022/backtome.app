import React, { useState, useEffect } from 'react';
import api from '../Service/api';

export function messageData() {
  const userId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const [groupedMessages, setGroupedMessages] = useState([]);

  useEffect(() => {
    async function fetchApiMessages() {
      try {
        const response = await api.get(`message/${userId}/find`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const apiMessageList = response.data;
        apiMessageList.sort(
          (a, b) => a.createdAt.seconds - b.createdAt.seconds
        );

        const grouped = {};
        apiMessageList.forEach((message) => {
          const otherUserId =
            message.senderId === userId ? message.receiverId : message.senderId;
          if (
            (message.receiverId === otherUserId &&
              message.senderId === userId) ||
            (message.receiverId === userId && message.senderId === otherUserId)
          ) {
            if (!grouped[otherUserId]) {
              grouped[otherUserId] = [];
            }
            grouped[otherUserId].push(message);
          }
        });

        const groupedArray = [];
        for (const userId in grouped) {
          groupedArray.push({
            userData: await fetchUserData(userId),
            messages: grouped[userId],
          });
        }

        setGroupedMessages(groupedArray);
      } catch (error) {
        console.error('Error fetching API messages:', error);
      }
    }

    fetchApiMessages();
  }, [userId, token]);

  async function fetchUserData(userId) {
    const token = localStorage.getItem('token');
    try {
      const { data } = await api.get(`users/${userId}/find`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { name: data.name, id: data.id };
    } catch (error) {
      console.error('Error fetching API user data:', error);
      return '';
    }
  }

  return { groupedMessages };
}
