import { motion } from 'framer-motion';
import './styles.css';
import useAppProvider from './../../hooks/app-provider';
import Header from '../../components/Header';
import BgOne from '../../assets/adoption-search/blue.svg';
import BgTwo from '../../assets/adoption-search/yellowAndBlue.png';
import BgThree from '../../assets/adoption-search/yellow.svg';
import BgFour from '../../assets/adoption-search/blueTwo.svg';
import FosterSearch from '../../components/fosterSearch';
import { useEffect, useState } from 'react';

export default function AdoptionSearch() {
  const [main, setMain] = useState(false);
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

  const [showHeader, SetShowHeader] = useState(false);
  useEffect(() => {
    SetShowHeader(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="adoption-search"
    >
      <div className="adoption-search">
        <>
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
          <img className="adoption-bg-one" src={BgOne} alt="" />
          <img className="adoption-bg-Two" src={BgTwo} alt="" />
          <img className="adoption-bg-Three" src={BgThree} alt="" />
          <img className="adoption-bg-Four" src={BgFour} alt="" />
        </>
        <div className="adoption-content">
          <FosterSearch main={main}/>
        </div>
      </div>
    </motion.div>
  );
}
