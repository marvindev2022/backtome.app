import React from 'react';

function InputText({ type, placeholder, set, value, required, className }) {
  return (
    <input
      type={type}
      className={`${className} flex items-center rounded-xl shadow-lg pl-5 pr-3 font-normal text-[#3d3d3d] font-secondary bg-[#F4F4F4] w-full text-xl leading-6 focus:outline-none`}
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
      value={value}
      required={required}
    />
  );
}

export default InputText;
