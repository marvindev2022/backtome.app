import api from '../Service/api';
const token = localStorage.getItem('token');
const userId = localStorage.getItem('id');

export async function fetchApiMessagesSend(
  newMessage,
  receiverId,
  resolved,
  resolutionDescription
) {
  try {
    const newMessageSend = {
      title: 'pet perdido',
      content: newMessage,
      senderId: userId,
      receiverId,
      resolved: resolved ?? false,
      resolutionDescription: resolutionDescription ?? '',
    };
    await api.post(`message/send`, newMessageSend, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
