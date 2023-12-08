import React, { useState, useEffect, useRef } from 'react';
import api from '../../Service/api';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { convertTimestampToDate } from '../../utils/convertTime';
import { fetchApiMessagesSend } from '../../utils/sendMessage';
import FormChat from './formChat';
import io from 'socket.io-client';
import isVerified from './../../assets/card/CardStamp/Identidade.svg';
import Action from '../action';
import alert from './../../assets/alert.svg';
import ModalEndChat from '../modalEndChat';
function MessageContent({ message, userId }) {
  const isUserSender = message.senderId === userId;

  return (
    <section className="flex flex-col pb-[20px]">
      <div
        className={`px-2 py-2 rounded-lg bg-[#FBAD36] text-black font-special text-center 
          ${
            isUserSender
              ? 'rounded-tl-[10px] rounded-tr-[0px]'
              : 'rounded-tl-[0px] rounded-tr-[10px]'
          } 
          rounded-bl-[10px] gap-[11.22px] max-w-[500px] text-justify`}
      >
        <div className="text-[22px]">{message.content}</div>
      </div>
      <div className="text-[16px] text-[#494949] font-special pl-2">
        {formatDistanceToNow(convertTimestampToDate(message.createdAt), {
          locale: ptBR,
          addSuffix: true,
        })}
      </div>
    </section>
  );
}

function UserAvatar({ user }) {
  return (
    <span className="rounded-[50%] flex justify-center items-center w-[82px] h-[82px] bg-white relative border-[#231E54] border-2">
      <img
        className="rounded-[50%] w-[66px] h-[66px] object-cover"
        src={user?.photo}
        alt={user?.name}
      />
      {user?.isVerified && (
        <img
          className="w-[22px] h-[22px] absolute left-[60px] top-2 bg-white rounded-full"
          src={isVerified}
          alt="Verified"
        />
      )}
    </span>
  );
}

function UserDetails({ user,setOpenModal,setOpenModalType }) {
  return (
    <span className="flex flex-col pl-4 gap-2 " >
      <h2 className="text-[var(--black-simple, #000)] font-special text-[17px] font-bold">
        {user?.name}
      </h2>
      <div className="flex gap-2">
        <button onClick={()=>{
          setOpenModal(true)
          setOpenModalType("fail")
        }} className="cursor-pointer bg-[#E95B47] text-white font-bold w-[90px] h-[39px] rounded-[13px] text-center">
          Finalizar
        </button>
        <button onClick={()=>{
          setOpenModal(true)
          setOpenModalType("success")
        }} className="cursor-pointer bg-[#FBAD36] text-white font-bold w-[90px] h-[39px] rounded-[13px] text-center">
          Sucesso
        </button>
      </div>
    </span>
  );
}

function UserInfo({ user,setOpenModal,setOpenModalType  }) {
  return (
    <div className="flex gap-1 p-2 relative max-w-[600px] min-w-[350px]">
      <div className="absolute w-[80%] h-[1px] right-0 top-0 mt-[-20px] bg-[#FBAD36] bg-gradient-to-r from-[#fff] via-[#FBAD36] to-[#fff]" />
      <UserAvatar user={user} />
      <UserDetails user={user} setOpenModal={setOpenModal } setOpenModalType={setOpenModalType }   />
    </div>
  );
}

function Chat({ receiverId, chatOpen, setChatOpen }) {
  const userId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const ulRef = useRef();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openModalType, setOpenModalType] = useState('')
  const [socket, setSocket] = useState(null);
  const [render, setRender] = useState(false);
  const [user, setUser] = useState();
  const tips = [
    'Jamais compartilhe dados pessoais como seu endereço, dados bancários, fotos de documentos pessoais, etc...;',
    'Combine encontros em lugares públicos movimentados (de preferência);',
    'Tenha certeza de que o Pet seja realmente o seu ou da pessoa que está em contato para evitar problemas.',
  ];

  useEffect(() => {
    async function fetchApiMessages() {
      try {
        const {data}= await api.get(`message/${userId}/find`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const apiMessageList = data.filter(
          (message) =>
            (message.senderId === userId &&
              message.receiverId === receiverId) ||
            (message.senderId === receiverId && message.receiverId === userId)
        );
        apiMessageList.sort(
          (a, b) => a.createdAt.seconds - b.createdAt.seconds
        );
        setMessages(apiMessageList);
      } catch (error) {
        console.error('Error fetching API messages:', error);
      }
    }
    async function fetchApiUserData() {
      try {
        const { data } = await api.get(`users/${receiverId}/find`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.error('Error fetching API messages:', error);
      }
    }

    fetchApiUserData();
    fetchApiMessages();
    setRender(false);
  }, [userId, token, receiverId, render]);

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.scrollTo(0, ulRef.current.scrollHeight);
    }
  }, [messages, render]);

  useEffect(() => {
    try {
      const newSocket = io('https://btm-backend.onrender.com/', {
        auth: {
          token: `Bearer ${token}`,
        },
        transports: ['websocket'],
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (socket) socket.on('newMessage', () => setRender(!render));
  }, [socket, userId, receiverId]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (newMessage) {
      fetchApiMessagesSend(newMessage, receiverId);
      setNewMessage('');
    }
    setRender(!render);
  };
  return (
    <section className="flex flex-col h-screen justify-center pt-10 w-full relative  ">
    { openModal && <ModalEndChat
      type={openModalType}
      contactName={localStorage.getItem('name')}
      setShowModal={setOpenModal}
      />}
      <span
        onClick={() => setChatOpen(!chatOpen)}
        style={{ zIndex: 2 }}
        className="cursor-pointer absolute top-[-50px] left-34 text-[#000606] font-special font-medium text-2xl text-end w-[240px]   "
      >
        /Chat
      </span>
      <div className="flex min-w-[80vw] gap-7 flex-wrap relative ">
        <span className="bg-white absolute ml-[20px]  top-[-15px] left-5 font-special text-[22px] w-[150px] h-[20px] text-center rounded-[10%]">
          Chat
        </span>
        <div className=" border-t-gray-400 border-t-[1px] w-[60%] ml-[20px]" />
        <ul
          ref={ulRef}
          className="overflow-y-scroll scrollbar-thin scrollbar-thumb-[#231E54] flex-grow overflow-auto min-w-[50vw] max-h-[700px] p-3"
        >
          {messages.map((message, index) => (
            <li
              key={index}
              className={`flex justify-${
                message.senderId === userId ? 'end' : 'start'
              } mb-4`}
            >
              <MessageContent message={message} userId={userId} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-8 max-w-[600px] min-w-[350px]">
          <Action
            onClick={(e) => handleOpenModal(e, 'Denunciar')}
            type="denuncia"
            text="Fazer denúncia"
            p="Denunciando alguma situação suspeita nos ajuda a manter a plataforma mais segura para todos os usuários."
            textBtn="Denunciar"
            maxWidth="w-[302px]"
          />

          <article className="w-[302px] h-[230px] px-3 py-4 border-2 border-primary rounded-[5.551470756530762px] gap-4">
            <h1 className="text-sm text-[#23262F] font-main mb-4">
              Dicas de como evitar transtornos
            </h1>
            <div className="flex gap-6">
              <img src={alert} alt="Dicas" />
              <ul className="list-disc pl-5 text-sm">
                {tips.map((tip, index) => (
                  <li
                    key={index}
                    style={{
                      color: 'var(--color-dark-dark-2, #87898E)',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      lineHeight: '13.324px',
                    }}
                    className="mb-2"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div className="flex gap-5 ">
        <FormChat
          handleSendMessage={handleSendMessage}
          newMessage={newMessage}
          render={render}
          setRender={setRender}
          setNewMessage={setNewMessage}
        />
        <UserInfo user={user} setOpenModal={setOpenModal} setOpenModalType={setOpenModalType}/>
      </div>
    </section>
  );
}

export default Chat;
