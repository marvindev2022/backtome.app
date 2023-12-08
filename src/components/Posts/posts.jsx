import { useEffect, useState } from 'react';
import api from './../../Service/api';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function RenderPosts() {
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [position, setPosition] = useState('Todas');
  function filter(e, filter) {
    e.preventDefault();
    e.stopPropagation();
    let allPosts = posts;
    if (filter) {
      allPosts = allPosts.filter((post) => post.type === filter);
      setPosition(filter);
      return setFilterPosts(allPosts);
    }
    setFilterPosts(posts);
    setPosition('Todas');
  }

  useEffect(() => {
    async function fetchAnimals() {
      const token = localStorage.getItem('token');

      try {
        const animalsFoundArray = await api.get('animals-found/find', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const animalsFindArray = await api.get('lost-animals/find', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const found = animalsFoundArray.data.map((animal) => ({
          ...animal,
          type: 'Achados',
        }));

        const lost = animalsFindArray.data.map((animal) => ({
          ...animal,
          type: 'Perdidos',
        }));

        setPosts([...lost, ...found]);
        setFilterPosts([...lost, ...found]);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    }

    fetchAnimals();
  }, []);
  return (
    <div className="w-full pt-14">
      <div className="w-full">
        <div className="relative flex w-4/5 text-[#060606] font-main font-normal text-lg border-b-[0.5px] border-solid border-[#494949] pb-4 ">
          <div
            className={`absolute -bottom-[0.1rem] border-b-4 border-solid border-secondary w-24 transition-all ease-in-out duration-500 ${
              position === 'Todas'
                ? 'left-7'
                : position === 'Perdidos'
                ? 'left-44'
                : position === 'Achados'
                ? 'left-[19.8rem]'
                : 'left-[29rem]'
            }`}
          />
          <h2
            onClick={(e) => filter(e)}
            className="w-1/6 cursor-pointer text-center relative"
          >
            Todas
            {position === 'Todas' && (
              <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                {filterPosts.length}
              </b>
            )}
          </h2>
          <h2
            onClick={(e) => filter(e, 'Perdidos')}
            className="w-1/6 cursor-pointer text-center relative"
          >
            Perdidos
            {position === 'Perdidos' && (
              <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                {filterPosts.length}
              </b>
            )}
          </h2>
          <h2
            onClick={(e) => filter(e, 'Achados')}
            className="w-1/6 cursor-pointer text-center relative"
          >
            Achados
            {position === 'Achados' && (
              <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                {filterPosts.length}
              </b>
            )}
          </h2>
        </div>

        <div className="flex flex-col w-full max-h-[39rem] gap-12 mt-9 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#231E54] px-3">
          {filterPosts.map((data, index) => (
            <div key={index}>
              <div className="flex justify-between w-full text-lg font-special font-normal text-[#060606] cursor-pointer">
                <h2 className="w-1/5 truncate">{data.species}</h2>
                <h2 className="w-1/5 truncate">{data.color}</h2>
                <h2 className="w-1/5 truncate">{data.type}</h2>
                <h2 className="w-1/5 truncate">{data.gender}</h2>
                <h2 className="w-1/5 truncate">
                  {' '}
                  {capitalizeFirstLetter(
                    format(new Date(data.createdAt), 'MMM dd yyyy', {
                      locale: ptBR,
                    })
                  )}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
