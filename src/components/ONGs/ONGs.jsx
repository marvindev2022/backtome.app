import React, { useEffect,  useState } from 'react';

import api from './../../Service/api';
const token = localStorage.getItem('token');

export default function RenderOngs() {
  const [ongsFind, setOngsFind] = useState([]);

  useEffect(() => {
    async function fetchAongs() {
      const ongsFindArray = await api.get('ongs/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOngsFind(ongsFindArray.data);
    }
    fetchAongs();
  }, []);

  return (
    <section className="flex flex-col min-w-[100%] max-w-[88rem] max-h-full items-center justify-center pt-[79px] gap-[50px]">
    <div className="flex flex-wrap gap-8 max-w-full max-h-[40rem] justify-center items-center overflow-auto flex-shrink-0 border-5 border-red-950 p-[20px 0] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#231E54]">
      {ongsFind.length > 0 &&
        ongsFind.map((ong, index) => {
          return (
            <article className="flex flex-col rounded-lg shadow-lg bg-white w-72 justify-center items-center " key={index}>
                <div className="flex gap-1 p-2">
                  <span className="rounded flex justify-center items-center w-[200px] h-[200px] bg-slate-100">
                    <img
                      className="rounded w-[200px] h-[200px]"
                      src={ong.logo}
                      alt={`${ong.name} Logo`}
                    />
                  </span>
                </div>
                  <h2 className="text-[var(--black-simple, #000)] font-special text-17px font-normal">
                    {ong.name}
                  </h2>
                <p className="text-gray-600 text-sm px-2 pb-2">{ong.description}</p>
                <div className="px-2 pb-2">
                  <p className="text-sm">
                    <strong>Address:</strong> {ong.address}
                  </p>
                  <p className="text-sm">
                    <strong>Contact:</strong> {ong.contact}
                  </p>
                  <a className="text-sm">
                    <strong>Website:</strong> <a href={ong.website} target="_blank" rel="noopener noreferrer">{ong.website}</a>
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
