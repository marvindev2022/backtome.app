import React from 'react';
import { Link } from 'react-router-dom';
import github from './../../assets/developerProfile/links/github.svg';
import linkedin from './../../assets/developerProfile/links/linkedin.svg';
import cv from './../../assets/developerProfile/links/cv.svg';

function DevCard({ index, user }) {
  return (
    <div key={index} className="h-auto snap-center">
      <div className="flex flex-col justify-around items-center w-56 h-72 px-5 py-3 gap-1 bg-primary rounded-lg border-white border border-solid shadow-lg shadow-[#d3dae2] hover:bg-secondary">
        <img className="w-20 rounded-full" src={user.src} alt={user.name} />
        <div className="flex min-h-[8rem] text-white flex-col justify-around items-center">
          <span>
            <h3 className="w-52 text-center font-main text-xl text-ellipsis">
              {user.name}
            </h3>
            <h4 className="flex flex-col self-stretch text-center font-extralight font-secondary text-sm">
              {user.stack}
            </h4>
          </span>
          <p className="flex w-44 min-h-[4rem] text-xs font-secondary tracking-tighter text-center font-light">
            {user.bio}
          </p>
        </div>
        <div className="flex justify-around items-center border-t border-solid border-[#E7ECF1] gap-2 w-44 px-3 pt-2 pb-3">
          <span className="flex flex-col justify-center items-center">
            <Link
              className="flex flex-col text-white text-center text-xs"
              to={user.github}
            >
              <img className="h-4" src={github} alt="github" />
              github
            </Link>
          </span>
          <span>
            <Link
              className="flex flex-col text-white text-center text-xs"
              to={user.linkedin}
            >
              <img className="h-4" src={linkedin} alt="linkedin" />
              linkedin
            </Link>
          </span>
          <span>
            <Link
              className="flex flex-col text-white text-center text-xs"
              to={user.cv}
            >
              <img className="h-4" src={cv} alt="curriculo" />
              cv
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DevCard;
