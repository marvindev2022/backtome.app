import { useState } from 'react';
import closeBtn from '../../assets/closeBtn.svg';
import { AccessForm } from '../forms/Access';
import Button from '../button';
import { toastFailWhite, toastSuccess } from './../../context/toast';
import { useNavigate } from 'react-router-dom';
import api from './../../Service/api';
export default function Modal({
  setShowModal,
  type,
  title,
  img,
  text,
  textBtn,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [motivoDesativacao, setMotive] = useState('');
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !motivoDesativacao)
      return toastFailWhite('Preencha todos os campos', 'toastWhite');
    try {
      const response = await api.patch(
        `users/${localStorage.getItem('id')}/delete`,
        { name, email, motivoDesativacao },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.status === 200) {
        toastSuccess('Conta Desativada');
        localStorage.clear();
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#ffffff85] overflow-hidden">
      <div className="relative flex flex-col bg-[#FCFCFD] rounded-xl shadow-modal w-[34rem] h-[45rem] 1536:h-[40rem] 1366:h-[36rem] px-10 py-6 gap-8 1536:gap-2 1366:gap-1">
        <h1 className="text-[#23262F] font-main text-2xl 1536:text-lg leading-8">
          {title}
        </h1>
        <img
          onClick={(e) => {
            setShowModal('');
          }}
          className="absolute top-5 right-5 w-8 h-8 cursor-pointer"
          src={closeBtn}
          alt=""
        />
        <div className="flex gap-9">
          <img src={img} alt={`img ${type}`} />
          <h1 className="text-[#87898E] font-secondary text-base 1536:text-sm 1366:text-sm font-light">
            {text}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full w-full gap-5 1366:gap-1"
        >
          <AccessForm.Root>
            <AccessForm.Input
              label="Digite seu nome"
              type="text"
              placeholder="Nome Sobrenome"
              set={setName}
              value={name}
              required={true}
            />
          </AccessForm.Root>
          <AccessForm.Root>
            <AccessForm.Input
              label="Email cadastrado"
              type="text"
              placeholder="email@email.com"
              set={setEmail}
              value={email}
              required={true}
            />
          </AccessForm.Root>
          <div className="text-gray-500">
            <label
              className="flex w-fit justify-center relative bg-white font-secondary px-1 py-0 font-medium top-3 left-[12%]"
              htmlFor="Motivo"
            >
              {type === 'Excluir' ? 'Motivo' : 'Denuncia'}
            </label>
            <textarea
              type="text"
              placeholder="Escreva sua mensagem aqui..."
              onChange={(e) => setMotive(e.target.value)}
              value={motivoDesativacao}
              required={true}
              rows={7}
              className="w-full border-2 border-solid outline-none border-primary rounded-xl shadow-lg font-secondary font-light text-sm text-gray-500 bg-transparent px-8 py-5"
            />
          </div>

          <div className="flex justify-center items-center w-full ">
            <Button
              type="submit"
              className="bg-[#E95B47] w-40 h-12 text-white font-main text-xl leading-8"
              text={textBtn}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
