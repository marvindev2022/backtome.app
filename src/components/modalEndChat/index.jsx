import { useState } from 'react';
import Checkbox from '../input/checkbox';
import btnClosed from '../../assets/modalEndChat/btn-closed.svg';
import Button from '../button';
import RatingButton from '../ratting';

export default function ModalEndChat({ type, nomeDoContato, setShowModal }) {
  const [selectedOptions, setSelectedOptions] = useState('');
  const [rating, setRating] = useState(4.5);
  const [step, setStep] = useState('step1');
  const [message, setMessage] = useState('');

  function handleClickEndChat(e) {
    e.preventDefault();
    e.stopPropagation();
    setStep('step2');
  }

  return (
    <div style={{zIndex:9999999}} className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#ffffff85] overflow-hidden">
      <div className="relative flex flex-col bg-[#FCFCFD] rounded-xl shadow-around w-[31rem] px-10 py-6 gap-5">
        <img
          className="absolute top-5 right-5 cursor-pointer"
          src={btnClosed}
          alt="button Closed"
          onClick={() => {
            setShowModal('');
          }}
        />
        {step === 'step1' ? (
          <>
            <h2 className="text-[#23262F] font-main text-xl font-normal">
              {type === 'success' ? 'Encontrou seu  Pet?' : 'Se enganou?'}
            </h2>
            <div className="flex font-secondary text-[#87898E] font-light">
              {type === 'success' ? (
                <p>
                  Ao finalizar esse contato você receberá o{' '}
                  <span className="text-[#231E54] ">Selo de Reencontro</span> e
                  o Usuário {nomeDoContato} receberá o{' '}
                  <span className="text-[#231E54] ">
                    Selo de Voluntário BackToMe
                  </span>
                  . Você também não poderá mandar mais mensagens para esse
                  contato.`
                </p>
              ) : (
                <p className="text-[#231E54] ">
                  Ao finalizar esse contato você perderá todo o histórico
                  deconversa.
                </p>
              )}
            </div>
            <div className="flex justify-end px-6">
              <Checkbox
                className="flex flex-col gap-2 text-gray-500 font-secondary text-base font-light"
                classNameInput="appearance-none border-2 min-w-[1.25rem] min-h-[1.25rem] border-primary border-solid checked:bg-primary cursor-pointer"
                options={
                  type === 'success'
                    ? [
                        'Já recuperei meu Pet.',
                        'Meu contato seguiu as dicas da BackToMe para evitar trantornos',
                      ]
                    : [
                        'Já recuperei meu Pet.',
                        'Meu contato não seguiu as dicas da BackToMe para evitar trantornos',
                        'Não é o meu Pet.',
                      ]
                }
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
            </div>
            <Button
              onClick={handleClickEndChat}
              type="button"
              className={`w-60 h-14 self-center text-white font-main text-xl ${
                type === 'success' ? 'bg-primary' : 'bg-[#E95B47]'
              }`}
              text={
                type === 'success'
                  ? 'Finalizar com sucesso'
                  : 'Finalizar sem sucesso'
              }
            />
          </>
        ) : (
          <>
            <h2 className="text-[#23262F] font-main text-xl font-normal">
              Avalie a plataforma
            </h2>
            <div className="flex justify-center">
              <RatingButton rating={rating} setRating={setRating} />
            </div>
            <p className="font-secondary text-sm text-[#87898E] font-light">
              O seu depoimento ajuda nossa plataforma. Fique a vontade para
              deixar um feedback.
            </p>
            <div className="text-gray-500">
              <label
                className="flex w-fit justify-center relative bg-white font-secondary px-1 py-0 font-medium top-3 left-[12%]"
                htmlFor="message"
              >
                Depoimento
              </label>
              <textarea
                className="resize-none w-full border-2 border-solid outline-none border-primary rounded-xl shadow-lg font-secondary font-light text-sm text-gray-500 bg-transparent h-full 1366:h-[80%] px-8 py-5"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                cols="30"
                rows="5"
              />
            </div>
            <Button
              onClick={handleClickEndChat}
              type="button"
              className={`w-32 h-12 self-center text-white font-main text-xl bg-[#231E54]`}
              text="Enviar"
            />
          </>
        )}
      </div>
    </div>
  );
}
