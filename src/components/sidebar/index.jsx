import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import adoteWhite from '../../assets/sidebar/adote-white.svg';
import adote from '../../assets/sidebar/adote.svg';
import ajudaWhite from '../../assets/sidebar/ajuda-white.svg';
import ajuda from '../../assets/sidebar/ajuda.svg';
import dashbordWhite from '../../assets/sidebar/dashbord-white.svg';
import dashbord from '../../assets/sidebar/dashbord.svg';
import iconPlus from '../../assets/sidebar/iconPlus.svg';
import logout from '../../assets/sidebar/logout.svg';
import perfilWhite from '../../assets/sidebar/perfil-white.svg';
import perfil from '../../assets/sidebar/perfil.svg';
import plataformaWhite from '../../assets/sidebar/plataforma-white.svg';
import plataforma from '../../assets/sidebar/plataforma.svg';
import sobreWhite from '../../assets/sidebar/sobre-white.svg';
import sobre from '../../assets/sidebar/sobre.svg';
import { toastSuccess } from '../../context/toast';

export default function Sidebar({ position, setPosition, showModalPostChoice, setShowModalPostChoice }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    e.stopPropagation();
    toastSuccess('Tchau, até a proxima!!');
    setTimeout(() => {
      navigate('/');
    }, 3000);
    localStorage.clear();
  }
  return (
    <div className="flex justify-around items-center relative w-64 h-full">
      <div
        className={`flex flex-col items-center bg-secondary absolute top-0 w-full gap-14 rounded-br-xl px-8 transition-all duration-500 ease-in-out p-8 ${
          position === 'Dashboard' || !position
            ? 'h-[30%]'
            : position === 'Perfil'
            ? 'h-[37%]'
            : position === `ONG'S`
            ? 'h-[44.5%] '
            : position === 'Posts'
            ? 'h-[51.5%]'
            : position === 'Adote'
            ? 'h-[58.5%]'
            : position === 'Mensagem'
            ? 'h-full'
            : 'h-[65%]'
        }`}
      >
        <div className="flex gap-2">
          <img className="w-10 h-10" src={logo} alt="img logo" />
          <h2 className="text-white font-main text-2xl md:text-2xl">
            BackToMe
          </h2>
        </div>
        <div className="justify-self-center w-full flex items-center justify-center h-12 bg-[#FBAD36] rounded-xl gap-3"
          onClick={() => {
            setShowModalPostChoice(!showModalPostChoice);
          }}>
          <img
            className=" flex items-center bg-secondary rounded-full w-8 h-8 p-1"
            src={iconPlus}
            alt="icon plus"
          />
          <h2 className="text-white font-main md:text-2xl">Novo Post</h2>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center w-full h-2/4 z-[1] p-8 gap-3">
        <div
          className="cursor-pointer flex items-center gap-6 w-full item "
          onClick={() => {
            setPosition('Dashboard');
          }}
        >
          <img
            src={
              position === 'Dashboard' || !position ? dashbord : dashbordWhite
            }
            alt=""
          />
          <h2
            className={`font-special font-medium text-3xl md:text-xl ${
              position === 'Dashboard' || !position
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Dashboard
          </h2>
        </div>
        <div
          className="cursor-pointer flex items-center gap-6 w-full item"
          onClick={() => {
            setPosition('Perfil');
          }}
        >
          <img src={position === 'Perfil' ? perfil : perfilWhite} alt="" />
          <h2
            className={`font-special font-medium text-3xl md:text-xl ${
              position === 'Perfil' ? 'text-black' : 'text-white'
            }`}
          >
            Meu Perfil
          </h2>
        </div>
        <div
          className="cursor-pointer flex items-center gap-6 w-full item"
          onClick={() => {
            setPosition(`ONG'S`);
          }}
        >
          <img
            src={position === `ONG'S` ? plataforma : plataformaWhite}
            alt=""
          />
          <h2
            className={`font-special font-medium text-3xl md:text-xl ${
              position === `ONG'S` ? 'text-black' : 'text-white'
            }`}
          >
            ONG'S
          </h2>
        </div>
        <div
          className="cursor-pointer flex items-center gap-6 w-full item"
          onClick={() => {
            setPosition('Posts');
          }}
        >
          <img src={position === 'Posts' ? sobre : sobreWhite} alt="" />
          <h2
            className={`font-special font-medium text-3xl md:text-xl ${
              position === 'Posts' ? 'text-black' : 'text-white'
            }`}
          >
            Meus Posts
          </h2>
        </div>
        <div
          className="cursor-pointer flex items-center gap-6 w-full item"
          onClick={() => {
            setPosition('Adote');
          }}
        >
          <img src={position === 'Adote' ? adote : adoteWhite} alt="" />
          <h2
            className={`font-special font-medium text-3xl md:text-xl ${
              position === 'Adote' ? 'text-black' : 'text-white'
            }`}
          >
            Adote
          </h2>
        </div>
        <div
          className="cursor-pointer flex items-center gap-6 w-full item"
          onClick={() => {
            setPosition('Ajuda');
          }}
        >
          <img src={position === 'Ajuda' ? ajuda : ajudaWhite} alt="" />
          <h2
            className={`font-special font-medium text-3xl md:text-xl ${
              position === 'Ajuda' ? 'text-black' : 'text-white'
            }`}
          >
            Ajuda
          </h2>
        </div>
      </div>
      <div
        className={`flex items-end justify-center bg-secondary absolute bottom-0 w-full rounded-tr-xl transition-all duration-500 ease-in-out ${
          position === 'Dashboard' || !position
            ? 'h-[65%] 1536:h-[64%] 1366:h-[64%]'
            : position === 'Perfil'
            ? 'h-[58%] 1536:h-[57%] 1366:h-[57%]'
            : position === `ONG'S`
            ? 'h-[51%] 1536:h-[50%] 1366:h-[50%]'
            : position === 'Posts'
            ? 'h-[44%] 1366:h-[43%]'
            : position === 'Adote'
            ? 'h-[37%] '
            : 'h-[30%] '
        }`}
      >
        <img
          onClick={handleLogout}
          className="cursor-pointer h-8 z-20 mb-10"
          src={logout}
          alt="icon logout"
        />
      </div>
    </div>
  );
}
