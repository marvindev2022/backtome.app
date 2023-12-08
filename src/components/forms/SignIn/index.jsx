import { useState } from 'react';
import { AccessForm } from '../Access';
import Button from '../../button';
import LogoBlack from '../../../assets/forms/signUp/logoBlack.svg';
import { Link } from 'react-router-dom';
import { schemaLoginValidation } from '../../../schemas/schemasUser';
import { toastFailWhite } from '../../../context/toast';
import axios from '../../../Service/api';
import { useNavigate } from 'react-router-dom';

function Login({ headerText, setSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await schemaLoginValidation.validate({
        email,
        password,
      });
      const { data } = await axios.post('/users/login', {
        email,
        password,
      });
      const { token, id, ...user } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('user', JSON.stringify(user));
      navigate(`/main`);
    } catch (error) {
      console.log(error);
      if (error.code) {
        return toastFailWhite(error.response.data.message, 'toastWhite');
      }
      return toastFailWhite(error.message, 'toastWhite');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <img src={LogoBlack} className="w-[25%] mb-5" alt="black logo" />
      <span className="text-primary text-4xl text-center">{headerText}</span>
      <AccessForm.Root>
        <AccessForm.Input
          value={email}
          set={setEmail}
          label="Digite seu email"
          placeholder={'email@exemplo.com'}
        />
        <AccessForm.Input
          value={password}
          set={setPassword}
          type="password"
          label="Digite a senha"
          placeholder="Senha"
        />
      </AccessForm.Root>

      <div className="flex justify-between items-center w-full mt-7 flex-row">
        <Button
          onClick={handleLogin}
          className="bg-secondary text-white flex flex-row items-center justify-center hover:bg-white w-[45%] hover:text-black hover:border-secondary"
          text={'Login'}
        />
        <Link
          onClick={() => setSignUp(false)}
          to={'/forget'}
          className="underline pr-4 flex justify-center text-gray-500 font-secondary font-extralight text-sm"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </div>
  );
}

export default Login;
