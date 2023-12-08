import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'react-proptypes';
import SignUp from '../../components/forms/SignUp';
import useAppProvider from './../../hooks/app-provider';
import Login from '../../components/forms/SignIn';
import ForgetPassword from '../../components/forms/ForgetPassword';
export default function Register({ path }) {
  const { setLogin, setSignUp } = useAppProvider();
  const [isReady, setIsReady] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (isReady) {
      gsap.from(formRef.current, { x: -100, opacity: 0, duration: 1 });
    }
  }, [isReady, path]);

  return (
    <>
      {isReady && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex pb-6 flex-col h-screen w-screen justify-center items-center md:flex-row"
        >
          <div
            className="flex gap-y-10 justify-center flex-col items-center h-full p-4"
            ref={formRef}
          >
            {path === 'register' && (
              <h2 className="w-screen text-[3.5rem] leading-[4.5rem] text-center md:hidden">
                Sign<span className="text-primary"> Up</span>
              </h2>
            )}
            {path === 'login' && (
              <h2 className="w-screen text-[3.5rem] leading-[4.5rem] text-center md:hidden">
                Log<span className="text-primary">in</span>
              </h2>
            )}
            {path === 'forget' && (
              <h2 className="w-screen text-[2.5rem] leading-[3.5rem] text-center md:hidden">
                Recuperação de <span className="text-primary">Senha</span>
              </h2>
            )}
            <div className="bg-white py-5 flex flex-col md:w-[26rem] w-[90%] min-h-[60%] items-center justify-center rounded-2xl shadow-around max-w-[420px]">
              {path === 'register' && (
                <SignUp
                  headerText={'Bem Vindo!'}
                  setSignUp={setSignUp}
                  setLogin={setLogin}
                />
              )}
              {path === 'login' && (
                <Login
                  headerText={'Bem Vindo de volta!'}
                  setSignUp={setSignUp}
                  setLogin={setLogin}
                />
              )}
              {path === 'forget' && (
                <ForgetPassword headerText={'Vamos te ajudar'} />
              )}
            </div>
          </div>
          <div className="hidden md:flex w-fit justify-center items-center h-full">
            <div className="flex items-center justify-center p-5 h-60 max-w-4xl w-full">
              <h2 className="w-full text-[3.5rem] leading-[4.5rem] text-right">
                De volta ao lar: <span className="text-primary">Encontre</span>{' '}
                seu Pet perdido, <span className="text-primary">ajude</span> a
                encontrar ou <span className="text-primary">adote</span> um!
              </h2>
            </div>
          </div>
        </motion.main>
      )}
    </>
  );
}

Register.propTypes = {
  forgotPassword: PropTypes.bool,
  setForgotPassword: PropTypes.func,
  signUp: PropTypes.bool,
  type: PropTypes.string,
  setLogin: PropTypes.func,
  setSignUp: PropTypes.func,
};
