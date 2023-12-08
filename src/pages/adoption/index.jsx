import { motion } from 'framer-motion';
import Animals from '../../assets/background/animals.svg';
import FosterImg from '../../assets/foster/fosterimg.svg';
import Header from '../../components/Header';
import ResponsibleAdoption from '../../components/responsibleAdoption';
import useAppProvider from '../../hooks/app-provider';
import './styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Adoption() {
  const navigate = useNavigate();
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="foster-page"
    >
      <div className="foster-page">
        <Header
          setForgotPassword={setForgotPassword}
          className={`${showHeader && 'show'}`}
          setBackgroundMenu={setBackgroundMenu}
          backgroundMenu={backgroundMenu}
          setSignUp={setSignUp}
          signUp={signUp}
          setLogin={setLogin}
          login={login}
          setCurrentPage={setCurrentPage}
        />
        <div className="foster-content">
          <div className="content">
            <ResponsibleAdoption />
            <button
              className="bg-secondary text-white h-[3.625rem] w-[10.3125rem] rounded-[0.625rem] font-main text-[1.34044rem] ml-[59.17px]"
              onClick={() => {
                setCurrentPage('adopt');
                navigate('/adopt/search');
              }}
            >
              Buscar
            </button>
          </div>
          <div className="img">
            <img className="img-foster" src={FosterImg} alt="" />
          </div>
        </div>
        <img className="img-animals" src={Animals} alt="" />
      </div>
    </motion.div>
  );
}
