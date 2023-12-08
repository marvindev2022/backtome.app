import React, { useState } from 'react';

export default function Checkbox({
  className,
  classNameInput,
  options,
  selectedOptions,
  setSelectedOptions,
  ...inputProps
}) {
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className={className}>
      {options.map((option) => (
        <label className="flex items-start gap-2 m-0" key={option}>
          <input
            className={classNameInput}
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            {...inputProps}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
