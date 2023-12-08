import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import PlatformHeroSection from './../../components/platform/hero.component';
import PlatformMissionSection from './../../components/platform/mission.component';
import useAppProvider from './../../hooks/app-provider';
import CardStack from '../../components/slick';
import Footer from './../../components/footer/index.jsx';
import logo from './../../assets/logo.svg';

import './styles.css';
import PlatformData from '../../components/platform/data.component';
function RenderPlatform() {
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
    <>
      <section id="plataforma" className="platform-section">
        <div className="platform-header">
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
        </div>

        <div className="platform-main">
          <PlatformHeroSection />
          <PlatformMissionSection />
        </div>
        <PlatformData />
      </section>

      <section className="testimonial-container">
        <div className="testimonial-left">
          <span className="testimonial-text">
          <img src={logo} />
            Veja o que estão falando sobre a BackToMe.
          </span>
        </div>
        <div className="testimonial-right">
          <CardStack />
        </div>
      </section>

      <Footer />
    </>
  );
}

RenderPlatform.propTypes = {
  setForgotPassword: PropTypes.func,
  showHeader: PropTypes.bool,
  setSignUp: PropTypes.func,
  signUp: PropTypes.bool,
  setBackgroundMenu: PropTypes.func,
  backgroundMenu: PropTypes.bool,
  setLogin: PropTypes.func,
  login: PropTypes.bool,
  page: PropTypes.func,
};

export default RenderPlatform;
