import { PropTypes } from 'react-proptypes';
import './styles.css';
export default function Input({
  label,
  type,
  placeholder,
  set,
  value,
  required,
  className,
}) {
  return (
    <div className={label !== 'buscar' ? 'divInput' : 'divInputSearch'}>
      {label !== 'buscar' ? <label htmlFor={label}>{label}</label> : ''}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={(e) => set(e.target.value)}
        value={value}
        required={required}
      />
    </div>
  );
}
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  set: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool.isRequired,
};
