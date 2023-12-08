import React, { useEffect, useRef, useState } from 'react';
import Button from './../../button';
import { Input } from './../standard';
import SelectAnimals from './../select';
import api from '../../../Service/api';
import imageAnimal from './../../../assets/ImageAnimal.svg';
import isVerified from './../../../assets/card/CardStamp/Identidade.svg';
import photo from './../../../assets/profileHeroCard/User.svg';
import ModalPet from '../../modalPet';
const token = localStorage.getItem('token');

export default function RenderInputDashboard() {
  const [selectInput, setSelectInput] = useState('Cachorro');
  const inputAnimal = useRef();
  const [animalsFind, setAnimalsFind] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState('');

  useEffect(() => {
    async function fetchAnimals() {
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

        const usersMap = new Map();

        await Promise.all(
          animalsFindArray.data.map(async (animal) => {
            if (!usersMap.has(animal.userId)) {
              const userByID = await api.get(`/users/${animal.userId}/find`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              usersMap.set(animal.userId, userByID.data);
            }
          })
        );

        const found = animalsFoundArray.data.map((animal) => ({
          ...animal,
          user: usersMap.get(animal.userId),
          type: 'Achado',
        }));

        const lost = animalsFindArray.data.map((animal) => ({
          ...animal,
          user: usersMap.get(animal.userId),
          type: 'Perdido',
        }));

        setAnimalsFind([...lost, ...found]);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    }

    fetchAnimals();
  }, []);
  const filteredAnimals = animalsFind.filter((animal) => {
    for (const key in animal) {
      if (
        animal[key].toString().toLowerCase().includes(searchText.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  return (
    <section className="flex flex-col  min-w-[100%] max-w-[88rem] max-h-full  items-center justify-center pt-[79px] gap-[50px]">
      <div className="flex w-[100%] justify-between">
        <div
          className="flex px-2 text-2xl flex-col md:flex-row gap-5 justify-center items-center"
          ref={inputAnimal}
        >
          <SelectAnimals
            options={['Cachorro', 'Gatos', 'Aves', 'Outros']}
            setSelectInput={setSelectInput}
            selectInput={selectInput}
            className={'md:w-44'}
          />
          <Input.Root>
            <Input.Text
              className={'h-12'}
              placeholder={`Buscar por ${selectInput}...`}
              value={searchText}
              set={setSearchText}
            />
          </Input.Root>
          <Button
            type="button"
            className="text-white bg-secondary text-lg leading-5 px-11 h-12 font-bold"
            text="Buscar"
          />
        </div>
        <div className="flex flex-col justify-center items-end text-[var(--black-simple, #000) font-special text-[18px] font-normal">
          <span>Últimos 30 dias</span>
          <span>baseada na sua localização</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 max-w-full max-h-[40rem] justify-center items-center overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-[#231E54]  flex-shrink-0 border-5 border-red-950 p-[20px 0]">
        {(filteredAnimals.length > 0 ? filteredAnimals : animalsFind).map(
          (animal, index) => {
            return (
              <article className="flex flex-col cursor-pointer" key={index}>
                <img
                  onClick={() => {
                    setShowModal(animal);
                  }}
                  id={animal.id}
                  className="w-60 
                    h-48
                    flex-shrink-0
                    rounded-[0.625rem]
                    
                    "
                  src={imageAnimal}
                  alt={animal?.distinctive_characteristics}
                />
                <div className="flex gap-1 p-2">
                  <span className="rounded-[50%] flex justify-center items-center  w-[22px] h-[22px] bg-slate-400">
                    <img
                      className="rounded-[50%] w-[22px] h-[22px] "
                      src={animal.user?.photo ?? photo}
                    />
                  </span>
                  <h2 className="text-[var(--black-simple, #000)] font-special text-17px font-normal">
                    {animal.user?.name}
                  </h2>
                  {animal.user?.isVerified && (
                    <img className=" w-[10px] h-[10px]" src={isVerified} />
                  )}{' '}
                  <h2 className="text-[var(--black-simple, #000)] font-special text-17px font-normal ml-5">
                    {animal.type}
                  </h2>
                </div>
              </article>
            );
          }
        )}
      </div>
      {showModal && (
        <ModalPet setShowModal={setShowModal} showModal={showModal} />
      )}
    </section>
  );
}
