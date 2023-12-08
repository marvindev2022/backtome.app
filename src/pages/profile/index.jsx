import { useEffect, useState } from 'react';
import api from '../../Service/api';
import CardStamp from '../../components/cards/CardStamps';
import FormProfile from '../../components/forms/Profile';
import ProfileHeroCard from '../../components/profileHero';
import { toastFailWhite, toastSuccess } from '../../context/toast';
import axios from 'axios';
import ModalPerfil from '../../components/ModalPerfil';

export default function Profile() {
  const [render, setRender] = useState(false);
  const [name, setName] = useState('');
  const [cardName, setCardName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');
  const [termsAgree, setTermsAgree] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);

  const id = localStorage.getItem('id');

  async function performZipCodeQuery(zipdCode) {
    const response = {
      zipdCodeData: {},
      error: '',
    };
    if (zipdCode.length < 8) return;
    try {
      const url = `https://viacep.com.br/ws/${zipdCode}/json/`;

      const responseApi = (await axios.get(url)).data;

      if (responseApi.erro) {
        response.error = 'Dados para preenchimento automático não encontrado';
      } else {
        setCity(responseApi.localidade);
        setState(responseApi.uf);
      }
    } catch (error) {
      response.error = 'Erro ao buscar dados';
    }
    return response;
  }

  async function getProfile() {
    try {
      const response = await api.get(`/users/${id}/find`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setName(response.data.name);
      setCardName(response.data.name);
      setEmail(response.data.email);
      setAge(response.data.age);
      setCpf(response.data.cpf);
      setPhone(response.data.phone);
      setCep(response.data.address.cep);
      setComplement(response.data.address.complement);
      setNumber(response.data.address.number);
      setIsVerified(response.data.isVerified);
      setPhoto(response.data.photo);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProfile(e) {
    e.preventDefault();
    e.stopPropagation();

    const form = {
      name,
      email,
      password: currentPassword,
      photo: 'sem url',
      phone,
      cpf,
      age,
      address: {
        cep,
        complement,
        number,
      },
    };

    try {
      const { data, status } = await api.put(`/users/${id}`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (status == 200 && data) {
        toastSuccess(data);
      } else {
        toastFailWhite('Erro ao editar!', 'toastWhite');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfile();
  }, [, render]);

  useEffect(() => {
    performZipCodeQuery(cep);
  }, [cep, render]);

  function validationTermsAgree() {
    if (!termsAgree) {
      return toastFailWhite(
        'Você precisa aceitar os termos de uso para continuar!',
        'toastWhite'
      );
    }

    setModalProfile(true);
  }

  return (
    <div className="flex justify-center items-center h-full w-full mt-8">
      <div className="flex gap-10">
        <div className="w-2/3 ">
          <FormProfile
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            age={age}
            setAge={setAge}
            cpf={cpf}
            setCpf={setCpf}
            phone={phone}
            setPhone={setPhone}
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            cep={cep}
            setCep={setCep}
            complement={complement}
            setComplement={setComplement}
            number={number}
            setNumber={setNumber}
            termsAgree={termsAgree}
            setTermsAgree={setTermsAgree}
            performZipCodeQuery={performZipCodeQuery}
          />
        </div>
        <div className="flex flex-col items-center w-1/3">
          <ProfileHeroCard
            name={name}
            email={email}
            isVerified={isVerified}
            photo={photo}
            setRender={setRender}
          />

          <h2 className="text-2xl self-start font-special mt-8">Selos</h2>
          <div className="flex flex-col gap-[0.69rem] w-full ">
            <CardStamp
              type="identidade"
              isVerified={isVerified}
              setRender={setRender}
            />
            <CardStamp type="voluntario" isVerified={isVerified} />
            <CardStamp type="reencontro" isVerified={isVerified} />
          </div>
          <button
            className="flex justify-center items-center mt-5 h-14 w-40 bg-secondary rounded-[0.625rem] text-white text-xl font-main"
            onClick={() => validationTermsAgree()}
            type="submit"
          >
            Salvar
          </button>
        </div>
      </div>
      {modalProfile && (
        <ModalPerfil
          setModalProfile={setModalProfile}
          updateProfile={updateProfile}
        />
      )}
    </div>
  );
}
