import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import RenderCarousel from '../../components/about/carousel';
import useAppProvider from './../../hooks/app-provider';
import backgroundImage from '../../assets/background/animals.svg';
export default function About() {
  const {
    setForgotPassword,
    setSignUp,
    signUp,
    setBackgroundMenu,
    backgroundMenu,
    setLogin,
    login,
    setCurrentPage,
  } = useAppProvider();
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    setShowHeader(true);
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden items-center w-full h-screen">
      <Header
        setForgotPassword={setForgotPassword}
        className={`${showHeader && 'show'}`}
        setSignUp={setSignUp}
        signUp={signUp}
        setBackgroundMenu={setBackgroundMenu}
        backgroundMenu={backgroundMenu}
        setLogin={setLogin}
        login={login}
        setCurrentPage={setCurrentPage}
      />
      <img className="bottom-0 right-0 fixed -z-10" src={backgroundImage}></img>
      <h1 className="font-main font-normal text-4xl sm:text-5xl mb-8 mt-5">
        Equipe BackToMe.
      </h1>
      <div className="flex flex-col text-center w-full max-w-[1200px]">
        <span className="text-center text-gray-500 text-xl px-2 font-secondary font-extralight">
          Nossa equipe é composta por um grupo talentoso de oito desenvolvedores
          altamente qualificados e que estudaram juntos. Cada membro da equipe
          traz consigo uma paixão compartilhada pela tecnologia e um compromisso
          em oferecer a melhor solução para a localização e adoção de animais de
          estimação. Temos especialistas em desenvolvimento web, bem como uma
          designer UX/UI, que garante que nossa aplicação seja intuitiva e
          atraente para todos os usuários.
        </span>
        <span className="text-center text-gray-500 text-xl px-2 font-secondary font-extralight">
          Trabalhamos em conjunto, aproveitando nossas habilidades individuais
          para atingir nosso objetivo de unir tecnologia ao propósito de fazer a
          diferença na vida dos animais e de suas famílias,{' '}
          <strong className="text-primary">trazendo-os de volta </strong>
          para casa e encontrando novos{' '}
          <strong className="text-primary">lares amorosos</strong> para aqueles
          que precisam.
        </span>
      </div>
      <RenderCarousel />
    </div>
  );
}
