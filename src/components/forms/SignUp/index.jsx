import { useState } from 'react';
import { AccessForm } from '../Access';
import Button from '../../button';
import LogoBlack from '../../../assets/forms/signUp/logoBlack.svg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  schemaFirstStepValidation,
  schemaSecondStepValidation,
  schemaFinalStepValidation,
  schemaRegisterUser,
} from '../../../schemas/schemasUser';
import { toastFailWhite } from '../../../context/toast';
import axios from '../../../Service/api';
import { removeSpecialChars } from '../../../functions/functions';

function SignUp({ headerText, setSignUp, setLogin, login }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [step, setStep] = useState(0);

  const handleRegister = async () => {
    try {
      await schemaFinalStepValidation.validate({
        password,
        confPassword,
      });
      const newUser = await schemaRegisterUser.validate({
        name,
        email,
        cpf: removeSpecialChars(cpf),
        phone: removeSpecialChars(phone),
        password,
      });
      await axios.post('/users/registered', newUser);
      setStep(step + 1);
      return;
    } catch (error) {
      return toastFailWhite(error.message, 'toastWhite');
    }
  };

  const handleNext = async () => {
    if (step <= 2) {
      try {
        if (step === 0) {
          await schemaFirstStepValidation.validate({
            name,
            email,
          });
          const verifyEmail = await axios.post('users/validate/email', {
            email,
          });
          if (!verifyEmail.data.isAvailable) {
            return toastFailWhite(verifyEmail.data.message, 'toastWhite');
          }
        }
        if (step === 1) {
          await schemaSecondStepValidation.validate({
            phone,
            cpf,
          });
        }
        if (step < 2) {
          setStep(step + 1);
        }
      } catch (error) {
        toastFailWhite(error.message, 'toastWhite');
        return;
      }
    }
    return;
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
    return;
  };

  const handleRedirection = () => {
    setLogin(true);
    setSignUp(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <img src={LogoBlack} className="w-[25%] mb-5" alt="black logo" />
      <span className="text-primary text-4xl text-center">
        {step === 3 ? 'Cadastrado com sucesso!' : headerText}
      </span>
      <AccessForm.Root>
        {step === 0 && (
          <>
            <AccessForm.Input
              value={name}
              set={setName}
              label="Digite seu nome"
              placeholder={'Nome Sobrenome'}
            />
            <AccessForm.Input
              value={email}
              set={setEmail}
              label="Digite o email"
              placeholder="exemplo@email.com"
            />
          </>
        )}
        {step === 1 && (
          <>
            <AccessForm.Input
              label="Digite o seu CPF"
              value={cpf}
              set={setCpf}
              placeholder={'Digite o seu CPF'}
              mask={'999.999.999-99'}
            />
            <AccessForm.Input
              label="Digite o telefone"
              value={phone}
              placeholder="Digite o celular"
              set={setPhone}
              mask={'(99) 99999-9999'}
            />
          </>
        )}
        {step === 2 && (
          <>
            <AccessForm.Input
              value={password}
              set={setPassword}
              label="Digite a Senha"
              placeholder="Senha"
              type="password"
            />
            <AccessForm.Input
              value={confPassword}
              set={setConfPassword}
              label="Confirmar a senha"
              placeholder="Senha"
              type="password"
            />
          </>
        )}
      </AccessForm.Root>
      {step !== 3 && (
        <>
          <div className="flex justify-between w-full mt-7 flex-row-reverse">
            <Button
              className={`${
                step === 2 && 'hidden'
              } bg-secondary text-white flex flex-row items-center justify-center hover:bg-white w-[45%] hover:text-black hover:border-secondary`}
              icon={<MdKeyboardArrowRight size="28" />}
              text={'Próx.'}
              onClick={() => handleNext()}
            />
            <Button
              className={`${
                step !== 2 && 'hidden'
              } bg-secondary text-white flex items-center justify-center hover:bg-white w-[45%] hover:text-black`}
              icon={<MdKeyboardArrowRight size="28" />}
              text={'Cadastrar'}
              onClick={() => handleRegister()}
            />
            <Button
              className={`${
                step < 1 && 'hidden'
              } bg-secondary text-white flex flex-row-reverse items-center justify-center hover:bg-white w-[45%] hover:text-black`}
              icon={<MdKeyboardArrowLeft size="28" />}
              text={'Ante.'}
              onClick={handlePrev}
            />
          </div>
        </>
      )}
      <p className="flex mt-3 text-gray-500 font-secondary font-extralight text-sm">
        {step !== 3 && 'Já possui cadastro?'}
        <Link onClick={handleRedirection} to={'/login'}>
          <span
            className={`${
              step === 3 && 'pt-9'
            } underline text-gray-500 font-secondary font-extralight text-sm`}
          >
            {step === 3 ? 'Fazer Login' : 'Clique aqui.'}
          </span>
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
