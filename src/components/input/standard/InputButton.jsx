import React from 'react';

export default function InputButton({ onClick, type, className, text, icon }) {
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
