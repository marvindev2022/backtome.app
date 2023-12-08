import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from './../Service/initalization';
import blobsBlue from './../assets/background/Blobs-blue.svg';
import blobsGroup from './../assets/background/Blobs-group.svg';
import blobsYellow from './../assets/background/Blobs-yellow.svg';
import animals from './../assets/background/animals.svg';
import Header from './../components/Header';
import useAppProvider from './../hooks/app-provider';
import './../css/index.css';
import Home from './../pages/home';
import Register from './../pages/register';

export default function App() {
  const {
    login,
    setLogin,
    currentPage,
    setCurrentPage,
    signUp,
    setSignUp,
    forgotPassword,
    setForgotPassword,
    backgroundMenu,
    setBackgroundMenu,
    showHeader,
    setShowHeader,
    begin,
    setbegin,
    beginAnimation,
    setBeginAnimation,
    endAnimation,
    setEndAnimation,
    isLoaded,
    setIsLoaded,
    endLoaded,
    setEndLoaded,
    recover,
    setRecover,
  } = useAppProvider();

  const unprotectedRoutes = {
    '/': true,
    '/register': true,
    '/login': true,
    '/forget': true,
  };

  const unprotectedRoutesElements = {
    '/': <Home isLoaded={isLoaded} endLoaded={endLoaded} begin={begin} />,
    '/login': <Register path="login" />,
    '/register': <Register path="register" />,
    '/forget': <Register path="forget" />,
  };

  const location = useLocation();

  useEffect(() => {
    async function initialRender() {
      try {
        await axios.get('/');
      } catch (error) {
        console.log(error);
      }
    }
    initialRender();
    if (location.pathname.startsWith('/recover/')) {
      setRecover(true);
    }

    location.pathname === '/' &&
      (setSignUp(false), setBackgroundMenu(false), setLogin(false));
    location.pathname === ('/login' || '/forget') &&
      (setSignUp(false), setBackgroundMenu(true), setLogin(true));
    location.pathname === '/register' &&
      (setSignUp(true), setBackgroundMenu(true), setLogin(false));

    const timeouts = [
      {
        duration: 800,
        action: () => {
          setBeginAnimation(true), setShowHeader(true);
        },
      },
      {
        duration: 1200,
        action: () => {
          setEndAnimation(true), setIsLoaded(true), setEndLoaded(true);
        },
      },
    ];

    const executeSequentialTimeouts = (index) => {
      if (index >= timeouts.length) {
        return;
      }

      const currentTimeout = timeouts[index];
      const nextIndex = index + 1;

      setTimeout(() => {
        currentTimeout.action();
        executeSequentialTimeouts(nextIndex);
        setbegin(true);
        localStorage.setItem('Loaded', true);
        localStorage.setItem('endLoaded', true);
      }, currentTimeout.duration);
    };

    executeSequentialTimeouts(0);
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [location]);

  return (
    <>
      {unprotectedRoutes[location.pathname] && (
        <div className="App font-main">
          <>
            <div className="hidden md:block">
              <img
                className={`blobsYellow ${
                  beginAnimation ? 'yellowAnimation' : ''
                } ${endAnimation ? 'yellowAnimationEnd' : ''} ${
                  signUp || login ? 'signInAtivado1' : ''
                }`}
                src={blobsYellow}
              />
              <img
                className={`blobsBlue ${
                  beginAnimation ? 'blobsBlueAnimation' : ''
                } ${endAnimation ? 'blobsBlueAnimationEnd' : ''} ${
                  signUp || login ? 'signInAtivado2' : ''
                }`}
                src={blobsBlue}
              />
              <img
                className={`blobsGroup ${
                  beginAnimation ? 'blobsGroupAnimation' : ''
                } ${endAnimation ? 'blobsGroupAnimationEnd' : ''} ${
                  signUp || login ? 'signInAtivado3' : ''
                } `}
                src={blobsGroup}
              />
            </div>
            <img
              className={`animals ${beginAnimation ? 'animalsAnimation' : ''}`}
              src={animals}
            />
          </>
          <Header
            setForgotPassword={setForgotPassword}
            className={showHeader}
            setBackgroundMenu={setBackgroundMenu}
            backgroundMenu={backgroundMenu}
            setSignUp={setSignUp}
            signUp={signUp}
            setLogin={setLogin}
            login={login}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <AnimatePresence mode="wait">
            {unprotectedRoutesElements[location.pathname]}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
