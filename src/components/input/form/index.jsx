import InputMask from "react-input-mask";
import { PropTypes } from "react-proptypes";
import "./styles.css";

export default function Input({
  label,
  type,
  placeholder,
  set,
  value,
  required,
}) {

  return (
    <div className="divInputForm">
      <label htmlFor={label}>{label}</label>
      {label === "Digite o seu CPF" ? (
        <InputMask
          mask="999.999.999-99"
          type={type}
          placeholder={label}
          onChange={(e) => set(e.target.value)}
          value={value}
          required={required}
        />
      ) : label === "Digite o Celular" ? (
        <InputMask
          mask="(99) 99999-9999"
          type={type}
          placeholder={label}
          onChange={(e) => set(e.target.value)}
          value={value}
          required={required}
        />
      ) : (
        <input
          type={
            label === "Digite a senha" || label === "Confirmar senha"
              ? "password"
              : type
          }
          placeholder={placeholder}
          onChange={(e) => set(e.target.value)}
          value={value}
          minLength={6}
          required={required}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
