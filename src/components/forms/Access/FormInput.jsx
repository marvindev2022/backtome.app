import InputMask from 'react-input-mask';

export default function FormInput({
  className,
  label,
  type,
  placeholder,
  set,
  value,
  minLength,
  mask,
  required,
}) {
  return (
    <div className={`text-gray-500 1366:h-[80%] ${className}`}>
      <label
        className="flex w-fit justify-center relative bg-white font-secondary px-1 py-0 font-medium top-3 left-[12%]"
        htmlFor={label}
      >
        {label}
      </label>
      <InputMask
        mask={mask}
        type={type}
        placeholder={placeholder}
        onChange={(e) => set(e.target.value)}
        value={value}
        required={required}
        className="w-full border-2 border-solid outline-none border-primary rounded-xl shadow-lg font-secondary font-light text-sm text-gray-500 bg-transparent h-full 1366:h-[80%] px-8 py-5"
      />
    </div>
  );
}
