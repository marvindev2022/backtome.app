import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import dogContructor from './../../assets/help/cb4754ac76960fc1c03db01e39374ce9 2.svg';
import useAppProvider from './../../hooks/app-provider';
import './styles.css';
import Help from '../../components/help';
function RenderHelp() {
  const {
    login,
    setLogin,
    setCurrentPage,
    signUp,
    setSignUp,
    setForgotPassword,
    backgroundMenu,
    setBackgroundMenu,
  } = useAppProvider();

  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    setShowHeader(true);
  }, []);
  return (
    <section className="section-help">
      <Header
        setForgotPassword={setForgotPassword}
        className={`${showHeader ? 'show' : ''}`}
        setBackgroundMenu={setBackgroundMenu}
        backgroundMenu={backgroundMenu}
        setSignUp={setSignUp}
        signUp={signUp}
        setLogin={setLogin}
        login={login}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-full h-full p-5 ">
          <Help/>
     
      </div>
    </section>
  );
}

export default RenderHelp;
