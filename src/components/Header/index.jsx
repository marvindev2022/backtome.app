import { PropTypes } from 'react-proptypes';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../button';
import RenderNav from '../nav';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Header({
  setForgotPassword,
  className,
  setSignUp,
  signUp,
  setBackgroundMenu,
  backgroundMenu,
  setLogin,
  login,
  setCurrentPage,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  function handleLogo(e) {
    e.preventDefault();
    e.stopPropagation();
    localStorage.clear();

    navigate('/');
    setSignUp(false);
    setBackgroundMenu(false);
    setLogin(false);
    setForgotPassword(false);
    setCurrentPage('home');
  }

  function handleSignUp(e) {
    e.preventDefault();
    e.stopPropagation();

    setSignUp(true);
    setLogin(false);
    setBackgroundMenu(true);
    setForgotPassword(false);

    setMenuOpen(false);
    navigate('/register');
  }

  function handleLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    setSignUp(false);
    setLogin(true);
    setBackgroundMenu(true);
    setForgotPassword(false);
    setMenuOpen(false);
    navigate('/login');
  }

  return (
    <header
      className={`${
        className ? 'opacity-100' : 'opacity-0'
      } relative flex items-center justify-between px-2 pt-4 pb-2 bg-transparent w-full h-12 md:mt-12 transition-opacity z-20 md:bg-transparent bg-white duration-[3s] leading-7 ease-in-out text-[21px] font-main md:pl-7 md:pr-7 lg:pl-24`}
    >
      <div onClick={handleLogo} className="flex gap-3 items-center">
        <img src={logo} alt="Logo" />
        <span>BackToMe.</span>
      </div>
      <GiHamburgerMenu
        onClick={() => setMenuOpen(!menuOpen)}
        className="right-4 md:hidden"
        size="28"
      />
      <div
        className={`${
          menuOpen ? 'right-2' : '-right-48'
        } flex flex-col rounded-md md:bg-transparent shadow-2xl bg-white z-10 items-center text-right px-0 absolute top-14 md:top-0 md:gap-x-6 lg:gap-3 lg:static md:flex-row md:right-0 transition-all duration-500 md:relative w-48 md:w-full md:shadow-none justify-end gap-y-2 py-4`}
      >
        <div className="cursor-pointer lg:mx-auto">
          <RenderNav setCurrentPage={setCurrentPage} />
        </div>
        <div className="flex flex-col w-fit md:flex-row md:items-center md:justify-center relative">
          <Button
            className={`${
              !backgroundMenu
                ? 'md:border-4 md:rounded-lg md:border-secondary'
                : ''
            } ${signUp ? 'md:text-white' : ''} w-44 lg:w-44 md:w-32 py-1`}
            onClick={handleSignUp}
            type="button"
            text="Sign Up"
          />
          <Button
            onClick={(e) => handleLogin(e)}
            className={`${login ? 'md:text-white' : ''} w-44 md:w-32 lg:w-44`}
            type="button"
            text="Login"
          />
          <div
            className={`${signUp ? `md:right-32 lg:right-44` : `right-0`} ${
              !backgroundMenu ? 'md:hidden' : 'md:block'
            } bg-secondary rounded-lg hidden md:w-32 lg:w-44 absolute h-12 transition-all ease-in-out duration-1000 -z-10`}
          ></div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setForgotPassword: PropTypes.func.isRequired,
  className: PropTypes.string,
  setSignUp: PropTypes.func.isRequired,
  signUp: PropTypes.bool.isRequired,
  setBackgroundMenu: PropTypes.func.isRequired,
  backgroundMenu: PropTypes.bool.isRequired,
  setLogin: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
