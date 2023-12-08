import { useState } from 'react';
import message from '../../assets/main/Message.svg';
import notification from '../../assets/main/Notification.svg';
import RenderOngs from '../../components/ONGs/ONGs';
import RenderPosts from '../../components/Posts/posts';
import RenderDashbord from '../../components/dashbord';
import Help from '../../components/help';
import Message from '../../components/message';
import ModalHeaderMain from '../../components/modalHeaderMain';
import ModalPostChoice from '../../components/modalPostChoice';
import MainAdoption from '../mainAdoption';
import Profile from '../profile';
import Sidebar from './../../components/sidebar/index';

export default function Main() {
  const [position, setPosition] = useState('Dashboard');
  const [showModal, setShowModal] = useState(false);
  const [showModalPostChoice, setShowModalPostChoice] = useState(false);

 
  return (
    <section className="flex w-screen h-screen">
      <div className="sidebar">
        <Sidebar position={position} setPosition={setPosition} showModalPostChoice={showModalPostChoice} setShowModalPostChoice={setShowModalPostChoice}/>
      </div>
      <main className="flex flex-col justify-start w-full max-h-full px-12 py-[29px] overflow-hidden">
        <header className="relative flex justify-between items-center w-full min-h-[5rem]">
          <h2 className="text-[#000606] font-special font-medium text-4xl">
            {position }
          </h2>
          <div className="flex gap-8 cursor-pointer">
            <img
              onClick={() => {
                setShowModal(!showModal);
              }}
              src={notification}
              alt="icon Notification"
            />
            <img
              src={message}
              alt="icon message"
              onClick={() => {
                setPosition('Mensagem');
              }}
            />
          </div>
          <div className="absolute w-full h-1 right-0 bottom-0 bg-[#FBAD36] bg-gradient-to-r from-[#fff] via-[#FBAD36] to-[#fff]"></div>
        </header>
        {showModal && <ModalHeaderMain />}
        {showModalPostChoice && <ModalPostChoice showModalPostChoice={showModalPostChoice} setShowModalPostChoice={setShowModalPostChoice}/>}
        {position === 'Ajuda' && <Help />}
        {position === 'Perfil' && <Profile />}
        {position === 'Adote' && <MainAdoption />}
        {position === 'Mensagem' && <Message />}
        {position === 'Dashboard' && <RenderDashbord />}
        {position === `ONG'S` && <RenderOngs />}
        {position === `Posts` && <RenderPosts />}
        

      </main>
    </section>
  );
}
