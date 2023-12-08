import { useState } from 'react';
import btnClosed from '../../assets/modalEndChat/btn-closed.svg';
import icon from '../../assets/modalReport/icon.svg';
import { AccessForm } from '../forms/Access';
import Button from '../button';

export default function ModalReport({ setShowModalReport, showModalReport }) {
  const [step, setStep] = useState('step1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleClickReport(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log({ name, email, message });
    setStep('step2');
  }

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[#ffffff85] overflow-hidden">
      <div className="relative flex flex-col bg-[#FCFCFD] rounded-xl shadow-around w-[34rem] px-10 py-6 gap-5">
        <img
          className="absolute top-5 right-5 cursor-pointer"
          src={btnClosed}
          alt="button Closed"
          onClick={() => {
            setShowModalReport('');
          }}
        />
        <h2 className="text-[#23262F] font-main text-xl font-normal">
          {step === 'step1' ? 'Fazer denúncia' : 'Usuário denunciado'}
        </h2>
        <div className="flex gap-9">
          <img src={icon} alt="icon" />
          <div class="flex flex-col gap-4 text-[#87898E] font-secondary text-sm font-light">
            <p>
              Denunciando alguma situação suspeita nos ajuda a manter a
              plataforma mais segura para todos os usuários.
            </p>
            {step !== 'step1' && (
              <>
                <p>
                  Encerramos o contato com usuário para evitar transtornos e
                  manter a segurança de ambos.
                </p>
                <p>
                  Nossa equipe está analisando sua requisição e, caso a denúncia
                  seja validada o usuário será bloqueado da plataforma e não
                  poderá se cadastrar novamente. Por isso pedimos aos usuários
                  que sejam extremamente fies em suas requisições para não
                  tomarmos atitudes injustas.
                </p>
              </>
            )}
          </div>
        </div>
        {step === 'step1' && (
          <form action="submit" className="flex">
            <AccessForm.Root className="flex flex-col h-full gap-11">
              <AccessForm.Input
                className="h-16"
                value={name}
                set={setName}
                type="text"
                label="Digite seu nome"
                placeholder={'Nome Sobrenome'}
              />
              <AccessForm.Input
                className="h-16"
                value={email}
                set={setEmail}
                type="email"
                label="Email cadastrado"
                placeholder="email@email.com"
              />
              <div className="text-gray-500">
                <label
                  className="flex w-fit justify-center relative bg-white font-secondary px-1 py-0 font-medium top-3 left-[12%]"
                  htmlFor="message"
                >
                  Motivo
                </label>
                <textarea
                  className="resize-none w-full border-2 border-solid outline-none border-primary rounded-xl shadow-lg font-secondary font-light text-sm text-gray-500 bg-transparent h-full 1366:h-[80%] px-8 py-5"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Escreva sua mensagem aqui..."
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                />
              </div>
              <Button
                onClick={handleClickReport}
                type="button"
                className={`w-44 h-14 self-center text-white font-main text-xl bg-[#E95B47]`}
                text="Denunciar"
              />
            </AccessForm.Root>
          </form>
        )}
      </div>
    </div>
  );
}
