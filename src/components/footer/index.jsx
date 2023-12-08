import { useState } from 'react';
import arrow from '../../assets/footer/arrow-down.svg';
import Button from '../button';
import Input from '../input/form';
import logo from './../../assets/forms/signUp/logoBlack.svg';
import './styles.css';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messagem, setMessage] = useState('');

  function handleTop(e) {
    e.stopPropagation();
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className="relative flex justify-between bg-footer bg-cover bg-right-bottom bg-no-repeat w-full pt-0 pb-20 px-32 gap-8">
      <div className="absolute flex items-center justify-center w-10 h-10 bottom-8 left-8 bg-white rounded-full border-white border-solid border-2 cursor-pointer ">
        <img
          className="w-4/5 h-4/5"
          onClick={(e) => handleTop(e)}
          src={arrow}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-14">
        <div className="flex flex-col w-full gap-8">
          <h1 className="text-white font-main text-8xl font-normal">
            Dúvidas?
          </h1>
          <p className="text-white font-special text-2xl font-normal w-[88%]">
            Tire suas dúvidas com nossa equipe preenchendo o formulário ao lado
            com seu nome, email e mensagem.{' '}
          </p>
        </div>
        <div className="flex self-start w-full">
          <Button
            type="button"
            className="text-white font-main text-2xl font-normal w-40 border-white border-4 border-solid"
            text="SingUp"
          />
          <Button
            type="button"
            className="text-white font-main text-2xl font-normal w-40 "
            text="Login"
          />
        </div>
      </div>
      <div className="h-full">
        <form
          className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-around w-[34rem] h-[36rem] px-12 py-2 gap-10"
          action="submit"
        >
          <img src={logo} alt="Logo" />
          <div className="flex flex-col w-full h-3/5 gap-8">
            <Input
              label="Digite seu nome"
              type="text"
              placeholder="Nome Sobrenome"
              set={setName}
              value={name}
              required={true}
            />
            <Input
              label="Digite seu email"
              type="text"
              placeholder="email@email.com.br"
              set={setEmail}
              value={email}
              required={true}
            />
            <div className="relative w-full h-3/5 border-2 border-solid border-[#fbad36] rounded-xl p-4">
              <label
                className="absolute -top-4 left-14 bg-white px-4 font-secondary text-[#494949]"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                className="w-full h-full resize-none"
                name="message"
                placeholder="Escreva sua mensagem aqui..."
                id="message"
                cols="30"
                rows="10"
                onChange={(e) => setMessage(e.target.value)}
                value={messagem}
                required={true}
              ></textarea>
            </div>
          </div>
          <Button
            type="submit"
            className="w-40 h-12 bg-[#231e54] text-white font-main text-xl"
            text="Enviar"
          />
        </form>
      </div>
    </footer>
  );
}
