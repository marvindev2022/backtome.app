import { useState } from 'react';

export default function useAppProvider() {
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [signUp, setSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [backgroundMenu, setBackgroundMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [begin, setbegin] = useState(false);
  const [beginAnimation, setBeginAnimation] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);
  const [isLoaded, setIsLoaded] = useState(
    localStorage.getItem('Loaded') || false
  );
  const [endLoaded, setEndLoaded] = useState(
    localStorage.getItem('endLoaded') || false
  );
  const [recover, setRecover] = useState(false);

  return {
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
  };
}
