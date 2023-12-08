import React from 'react';

function InputLabel({ className, label }) {
  return (
    <span className={className} htmlFor={label}>
      {label}
    </span>
  );
}

export default InputLabel;
