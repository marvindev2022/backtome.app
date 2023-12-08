import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import Button from '../button';
import CardOng from '../cards/CardONG';
import Input from '../input';
import SelectCity from '../input/selectCity';
import styles from './styles.module.css';
import arrowBack from '../../assets/foster/arrow-down.svg';
import arrowFront from '../../assets/foster/arrow-down-gray.svg';

export default function FosterSearch({main, scale}) {
  const home = useRef();
  const tl = useRef();
  const titleText = useRef();
  const pElement = useRef();
  const h2Home = useRef();
  const inputAnimal = useRef();
  const [selectInput, setSelectInput] = useState('Cidade');
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState(false);
  function toggleTimeline() {
    tl.current.reversed(!tl.current.reversed());
  }

  function collapseText() {
    setSearch(true);
    const ctx = gsap.context(
      (self) => {
        self.selector('.homepage');
        tl.current = gsap
          .timeline()
          .to(
            inputAnimal.current,
            { marginBottom: -110, duration: 0.5, animation: 'easeInOut' },
            '<'
          )
          .to(
            inputAnimal.current,
            { marginBottom: 100, duration: 1.5, animation: 'easeInOut' },
            '<'
          )
          .reverse();
        toggleTimeline();
      },
      [home]
    );
    return () => ctx.revert();
  }

  return (
    <div className={`${styles.background}`}>
      <div className={styles.homepage}>
        {!main && <div
          style={{ zIndex: 999, marginTop: `${search && '160px'}` }}
          className={styles.text}
          ref={titleText}
        >
          <h2 className={`font-main font-[80px] ${scale}`} ref={h2Home}>
            Adoção responsável e consciente
          </h2>
          <div ref={pElement} className={styles.divP}>
            <p>
              Fique tranquilo! Nossa lista foi cuidadosamente selecionada
              permitindo que os usuários encontrem organizações confiáveis e de
              qualidade, promovendo a adoção responsável e contribuindo para o
              bem-estar dos animais de estimação.
            </p>
          </div>
        </div>}
        <div className={`${styles.inputAnimal} w-full`} ref={inputAnimal}>
          <SelectCity
            setSelectInput={setSelectInput}
            selectInput={selectInput}
          />
          <Input
            type="text"
            placeholder={`Buscar ${selectInput}...`}
            set={setInputSearch}
            value={inputSearch}
            required={false}
          />
          <button className='bg-secondary text-[17.446px] font-main px-12 rounded-[10px]'
          onClick={collapseText} 
          type="button">Buscar</button>
        </div>
      </div>
      <div className={styles.searchContent}>
        {search && (
          <>
            <img src={arrowBack} alt="Voltar" />
            <>
              <CardOng />
              <CardOng />
              <CardOng />
            </>
            <img src={arrowFront} alt="Avançar" />
          </>
        )}
      </div>
    </div>
  );
}
