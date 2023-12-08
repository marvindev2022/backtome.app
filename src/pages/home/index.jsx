import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import Button from '../../components/button';
import { Input } from '../../components/input/standard';
import SelectAnimals from '../../components/input/select';

export default function Home() {
  const home = useRef();
  const tl = useRef();
  const titleText = useRef();
  const pElement = useRef();
  const h2Home = useRef();
  const inputAnimal = useRef();
  const [selectInput, setSelectInput] = useState('Cachorros');
  const [inputSearch, setInputSearch] = useState('');
  function toggleTimeline() {
    tl.current.reversed(!tl.current.reversed());
  }
 localStorage.clear()

  useLayoutEffect(() => {
    setTimeout(() => {
      const ctx = gsap.context(
        (self) => {
          self.selector('.homepage');
          tl.current = gsap
            .timeline()
            .to(
              titleText.current,
              { marginBottom: -110, duration: 0.5, animation: 'easeInOut' },
              '<'
            )
            .to(pElement.current, { opacity: 1, duration: 0.5 })
            .to(
              titleText.current,
              { marginBottom: 100, duration: 1.5, animation: 'easeInOut' },
              '<'
            )
            .to(pElement.current, { duration: 1, opacity: 1 })
            .to(
              titleText.current,
              { marginBottom: 90, duration: 0.5, animation: 'easeInOut' },
              '<'
            )
            .reverse();
          toggleTimeline();
        },
        [home]
      );
      return () => ctx.revert();
    }, 2000);
  }, []);

  return (
    <motion.main
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0 }}
      className="flex flex-col pt-28 items-center justify-center w-screen scrollbar-thin scrollbar-thumb-primary  overflow-y-auto overflow-x-hidden"
      ref={home}
    >
      <div className="relative pt-28 pb-5 sm:mt-0 top-[20%] sm:top-0 flex flex-col h-screen justify-center items-center w-screen">
        <div
          className="flex gap-y-3 w-screen flex-col justify-center items-center"
          ref={titleText}
        >
          <h2
            className="sm:text-center sm:leading-tight w-[90%] lg:text-6xl text-5xl max-w-[1280px]"
            ref={h2Home}
          >
            De volta ao lar: <span className="text-primary">Encontre</span> seu
            Pet perdido, <span className="text-primary">ajude</span> a encontrar
            ou <span className="text-primary">adote</span> um!
          </h2>
          <div
            ref={pElement}
            className="flex flex-col w-[90%] gap-y-5 max-w-[1200px] text-center font-secondary font-extralight text-xl leading-6"
          >
            <p>
              Faça parte de uma comunidade engajada na localização e adoção de
              animais de estimação perdidos. Na nossa plataforma você pode
              postar informações detalhadas sobre Pets que encontrou nas ruas,
              permitindo que os donos os encontrem. Além disso, oferecemos a
              oportunidade de encontrar um lar amoroso para esses animais
              através de um processo de adoção responsável.
            </p>

            <p>
              {' '}
              Junte-se a nós e faça a diferença na vida dos animais e de suas
              famílias!
            </p>
          </div>
        </div>
        <div
          className="flex px-2 text-2xl flex-col md:flex-row gap-2 pb-10 justify-center"
          ref={inputAnimal}
        >
          <SelectAnimals
            options={['Cachorros', 'Gatos', 'Aves', 'Outros']}
            setSelectInput={setSelectInput}
            selectInput={selectInput}
            className={'md:w-44'}
          />
          <Input.Root className="flex flex-col md:flex-row gap-2">
            <Input.Text
              className={'h-12'}
              placeholder={`Buscar por ${selectInput}...`}
            />
            <Input.Button
              type="button"
              className="text-white bg-secondary text-lg leading-5 px-11 h-12"
              text="Buscar"
            />
          </Input.Root>
        </div>
      </div>
    </motion.main>
  );
}
