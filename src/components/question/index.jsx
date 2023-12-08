import like from '../../assets/help/like.svg';
import likeFill from '../../assets/help/like-fill.svg';
import dislike from '../../assets/help/dislike.svg';
import dislikeFill from '../../assets/help/dislike-fill.svg';
import { useState } from 'react';

export default function Question({ colapsed, question, answer }) {
  const [click, setClick] = useState('');

  return (
    <div className=" flex flex-col gap-6 1440:gap-4 1366:gap-2">
      <h2 className="font-secondary w-full text-gray-500 text-base 1536:text-[0.75rem] 1440:text-[0.75rem] 1366:text-[0.75rem] font-light">
        {question}
      </h2>
      <p
        className={`font-secondary text-gray-500 text-base 1536:text-[0.7rem] 1440:text-[0.7rem] 1366:text-[0.7rem] leading-snug font-normal transition-all duration-500 ease-out ${
          !colapsed ? 'hidden' : ''
        }`}
      >
        {answer}
      </p>
      {colapsed && (
        <div className="flex self-end gap-5">
          <h1>Essa resposta te ajudou?</h1>
          <img
            onClick={() => {
              setClick('like');
            }}
            src={click === 'like' ? likeFill : like}
            alt=""
          />
          <img
            onClick={() => {
              setClick('dislike');
            }}
            src={click === 'dislike' ? dislikeFill : dislike}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
