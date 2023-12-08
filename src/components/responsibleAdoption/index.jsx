import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import useAppProvider from './../../hooks/app-provider';
import './styles.css';

export default function ResponsibleAdoption() {
  const { setCurrentPage } = useAppProvider();

  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('O que é?');
  const [text, setText] = useState(
    'Adoção responsável e consciente é o ato de acolher um animal de estimação levando em consideração bem-estar e necessidades individuais. Isso envolve a pesquisa prévia, compromisso com cuidados contínuos e escolha de adotar de fontes legítimas, como ONGs e/ou abrigos.'
  );
  const [source, setSource] = useState('');

  const steps = {
    0: {
      title: 'Por que adotar?',
      text: 'Ao adotar, você está oferecendo uma segunda chance a um Pet que precisa de um lar. Muitos animais em abrigos e ONGs estão esperando por uma família que os acolha. Além disso, a adoção promove a conscientização sobre a importância da proteção animal ajudando a combater a superpopulação de animais abandonados e/ou mal tratados.',
      source: '',
      nextStep: 1,
    },
    1: {
      title: 'Sou apto?',
      text: 'Algumas considerações a serem levadas nessa decisão: tempo e disponibilidade, espaço adequado, recursos financeiros, responsabilidade a longo prazo... Além disso, as organizações de adoção têm requisitos específicos e podem realizar entrevistas/visitas domiciliares para garantir que o animal seja adotado por um ambiente adequado.',
      source: '',
      nextStep: 2,
    },
    2: {
      title: 'Estatísticas...',
      text: 'De acordo com a Organização Mundial da Saúde (OMS), estima-se que cerca de 30 milhões de animais estejam em estado de abandono no Brasil, sendo 20 milhões são cães e 10 milhões são gatos (aproximadamente). Durante a pandemia da Covid-19, foi observado um aumento significativo no abandono de animais, com uma média de aumento de 60% nesse período.',
      source: '',
      nextStep: 3,
    },
    3: {
      title: 'Benefícios...',
      text: 'De acordo com a Organização Mundial da Saúde (OMS), estima-se que cerca de 30 milhões de animais estejam em estado de abandono no Brasil, sendo 20 milhões são cães e 10 milhões são gatos (aproximadamente). Durante a pandemia da Covid-19, foi observado um aumento significativo no abandono de animais, com uma média de aumento de 60% nesse período.',
      source:
        "'Companion Animals and Human Health: Benefits, Challenges, and the Road Ahead' - Sandra B. Barker e Rebecca A. Knisely; 'The role of pets in enhancing human well-being: Effects on child development, seniors, and the general population' - Nancy Gee e Rachel E. Herz.",
      nextStep: 4,
    },
    4: {
      title: 'Por que ONG’s?',
      text: 'Adoção responsável e consciente também envolve a escolha de adotar de fontes legítimas, como ONG’s, garantindo a procedência ética do Pet e evitando práticas prejudiciais à saúde e ao bem-estar animal. Nossa plataforma oferece uma busca com uma lista de organizações confiáveis comprovadas e comprometidas com a causa. Esta pronto?',
      source: '',
      nextStep: 5,
    },
    5: {
      title: 'O que é?',
      text: 'Adoção responsável e consciente é o ato de acolher um animal de estimação levando em consideração bem-estar e necessidades individuais. Isso envolve a pesquisa prévia, compromisso com cuidados contínuos e escolha de adotar de fontes legítimas, como ONGs e/ou abrigos.',
      source: '',
      nextStep: 0,
    },
  };

  // function handleNextStep() {
  //   const stepNumber = step;
  //   const currentStep = steps[stepNumber];

  //   setTitle(currentStep.title);
  //   setText(currentStep.text);
  //   setSource(currentStep.source);
  //   setStep(currentStep.nextStep);
  //   clearInterval(stepsInterval);
  // }

  const handleClickNextStep = () => {
    if (step <= 4) {
      const nextStep = step + 1;
      const newStep = steps[nextStep];
      setStep(nextStep);
      setTitle(newStep.title);
      setText(newStep.text);
      setSource(newStep.source);
    }
  };

  const handleClickPrevStep = () => {
    if (step > 0) {
      const nextStep = step - 1;
      const newStep = steps[nextStep];
      setStep(nextStep);
      setTitle(newStep.title);
      setText(newStep.text);
      setSource(newStep.source);
    }
  };

  // const stepsInterval = setInterval(handleNextStep, 15000);

  return (
    <div className="adoption-content">
      <div className="adoption-scrol">
        <span>
          <MdKeyboardArrowUp
            onClick={() => handleClickPrevStep()}
            className="text-black"
            size="28"
          />
        </span>
        <div className={step === 0 ? 'scroll' : 'scroll none'}></div>
        <div className={step === 1 ? 'scroll' : 'scroll none'}></div>
        <div className={step === 2 ? 'scroll' : 'scroll none'}></div>
        <div className={step === 3 ? 'scroll' : 'scroll none'}></div>
        <div className={step === 4 ? 'scroll' : 'scroll none'}></div>
        <div className={step === 5 ? 'scroll' : 'scroll none'}></div>
        <span>
          <MdKeyboardArrowDown
            onClick={() => handleClickNextStep()}
            className="text-black"
            size="28"
          />
        </span>
      </div>
      <div className="content">
        <h1>Adoção responsável.</h1>
        <h1>{title}</h1>
        <div className="text-content">
          <p className="description">{text}</p>
          {source && (
            <p className="source">
              <span className="red">*fontes: </span>
              {source}
            </p>
          )}
          <br />
        </div>
        <Button
          onClick={() => {
            setCurrentPage('adopt');
            navigate('/adopt/search');
          }}
          type="button"
          className="adoption-button"
          text="Buscar"
        />
      </div>
    </div>
  );
}
