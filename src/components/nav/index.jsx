import { useLocation, useNavigate } from 'react-router-dom';
import { PropTypes } from 'react-proptypes';

function RenderNav({ setCurrentPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const btnSelected = location.pathname;

  return (
    <nav>
      <div className="flex flex-col md:flex-row md:gap-x-6">
        <span
          className={`hover:text-primary ${
            btnSelected === '/about' ? 'text-primary' : ''
          }`}
          onClick={() => {
            setCurrentPage('about');
            navigate('/about');
          }}
        >
          Sobre nós
        </span>
        <span
          className={`hover:text-primary ${
            btnSelected === '/adopt' ? 'text-primary' : ''
          }`}
          onClick={() => {
            setCurrentPage('adopt');
            navigate('/adopt');
          }}
        >
          Adote
        </span>
        <span
          className={`hover:text-primary ${
            btnSelected === '/platform' ? 'text-primary' : ''
          }`}
          onClick={() => {
            setCurrentPage('platform');
            navigate('/platform');
          }}
        >
          Plataforma
        </span>
        <span
          className={`hover:text-primary ${
            btnSelected === '/help' ? 'text-primary' : ''
          }`}
          onClick={() => {
            setCurrentPage('help');
            navigate('/help');
          }}
        >
          Ajuda
        </span>
      </div>
    </nav>
  );
}

export default RenderNav;

RenderNav.prototype = {
  setCurrentPage: PropTypes.func,
};
