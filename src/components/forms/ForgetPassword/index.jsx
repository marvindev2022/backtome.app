import { useState } from 'react';
import { AccessForm } from '../Access';
import Button from '../../button';
import { removeSpecialChars } from '../../../functions/functions';
import LogoBlack from '../../../assets/forms/signUp/logoBlack.svg';
import { schemaRecoverValidation } from '../../../schemas/schemasUser';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { toastFailWhite } from '../../../context/toast';
import axios from '../../../Service/api';
import { Link } from 'react-router-dom';

function ForgetPassword({ headerText, setSignUp }) {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [step, setStep] = useState('form');

  const handleSubmit = async () => {
    try {
      const userInfo = {
        email,
        cpf: removeSpecialChars(cpf),
      };
      await schemaRecoverValidation.validate({
        email,
        cpf,
      });
      const { data } = await axios.post('/users/recovery-password', userInfo);
      setStep('message');
    } catch (error) {
      if (error.code) {
        return toastFailWhite(error.response.data.message, 'toastWhite');
      }
      return toastFailWhite(error.message, 'toastWhite');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <img src={LogoBlack} className="w-[25%] mb-5" alt="black logo" />
      {step === 'form' && (
        <>
          <span className="text-primary text-4xl text-center">
            {headerText}
          </span>
          <AccessForm.Root>
            <AccessForm.Input
              value={email}
              set={setEmail}
              label="Digite seu email"
              placeholder={'email@exemplo.com'}
            />
            <AccessForm.Input
              value={cpf}
              set={setCpf}
              label="Digite o CPF"
              placeholder="CPF"
              mask="999.999.999-99"
            />
          </AccessForm.Root>

          <div className="flex justify-center items-center w-full mt-7 flex-row">
            <Button
              onClick={handleSubmit}
              className="bg-secondary text-white flex flex-row items-center justify-center hover:bg-white w-[45%] hover:text-black hover:border-secondary"
              text={'Próx.'}
              icon={<MdKeyboardArrowRight size="28" />}
            />
          </div>
        </>
      )}
      {step === 'message' && (
        <>
          <div>
            <p className="text-primary text-center text-base leading-7">
              Caso o CFP e email sejam{' '}
              <span className="text-secondary">válidos</span> você receberá um
              email com o link para{' '}
              <span className="text-secondary">redefinição</span> da sua senha.
            </p>
          </div>
          <Link onClick={() => setSignUp(true)} to="/">
            <p className="mt-10 text-sm underline text-gray-500 font-secondary font-extralight text-sm`">
              Retornar à página inicial.
            </p>
          </Link>
        </>
      )}
    </div>
  );
}

export default ForgetPassword;
