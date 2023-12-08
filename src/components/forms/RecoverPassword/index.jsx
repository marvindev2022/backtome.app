import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LogoBlack from '../../../assets/forms/signUp/logoBlack.svg';
import { toastFailWhite } from '../../../context/toast';
import axios from '../../../Service/api';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { schemaFinalStepValidation } from '../../../schemas/schemasUser';
import { AccessForm } from '../Access';
import Button from '../../button';

export default function FormRecoverPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [passwordChange, setPasswordChange] = useState(false);
  const id = useParams();

  async function handleChangePassword(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      await schemaFinalStepValidation.validate({
        password,
        confPassword,
      });
      await axios.patch(`/users/${id['*']}/change-password/`, { password });
      setPasswordChange(true);

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      return toastFailWhite(error.message, 'toastWhite');
    }
  }

  return (
    <div className="flex items-center gap-5 justify-center flex-col w-[26rem] h-[50%] bg-white rounded-2xl shadow-around">
      <img className="w-[17%]" src={LogoBlack} alt="black logo" />
      <h1 className="font-main text-3xl text-primary">
        {passwordChange ? 'Senha alterada com sucesso' : 'Altere sua senha'}
      </h1>
      {!passwordChange && (
        <>
          <div className="flex flex-col w-full h-auto px-12">
            <AccessForm.Root>
              <AccessForm.Input
                label="Nova senha"
                type="password"
                placeholder="******"
                set={setPassword}
                value={password}
                required={true}
              />
              <AccessForm.Input
                label="Confirmar senha"
                type="password"
                placeholder="******"
                set={setConfPassword}
                value={confPassword}
                required={true}
              />
            </AccessForm.Root>
          </div>
          <Button
            onClick={handleChangePassword}
            icon={<MdKeyboardArrowRight size="28" />}
            text="Próx."
            className="bg-secondary w-40 h-12 text-white items-center flex justify-center"
          />
        </>
      )}
      {passwordChange && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col justify-center text-center">
            <span>Você será redirecionado para página de login.</span>
            <span>Caso não ocorra, </span>
          </div>
          <Link to="/login" className="text-sm text-gray-500">
            Clique aqui!
          </Link>
        </div>
      )}
    </div>
  );
}
