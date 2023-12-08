import { PropTypes } from 'react-proptypes';

export default function Button({ onClick, type, className, text, icon }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-lg py-2 ${className}`}
    >
      {text}
      {icon}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  text: PropTypes.string,
};
