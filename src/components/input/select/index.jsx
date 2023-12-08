import { PropTypes } from 'react-proptypes';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function SelectAnimals({
  setSelectInput,
  selectInput,
  options = [],
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className} relative`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pl-3 w-full pr-10 py-2 shadow-lg  text-left rounded-xl"
      >
        {selectInput}
        <div
          className={`${
            isOpen ? 'rotate-180' : ''
          } absolute right-3 top-1/2 transform transition-all duration-500 -translate-y-1/2`}
        >
          <IoIosArrowDown size="28" className="h-6 w-6" />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute w-full max-h-44 overflow-y-auto shadow-lg py-1 rounded-xl z-10 bg-white border border-gray-300">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectInput(option);
                setIsOpen(false);
              }}
              className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

SelectAnimals.propTypes = {
  setSelectInput: PropTypes.func.isRequired,
  selectInput: PropTypes.string.isRequired,
};
