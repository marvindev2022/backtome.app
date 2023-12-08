import { useState } from 'react';
import Input from '../../input/form';
import SelectState from '../../input/SelectState';

export default function FormProfile({
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  cpf,
  setCpf,
  phone,
  setPhone,
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  state,
  setState,
  city,
  setCity,
  cep,
  setCep,
  complement,
  setComplement,
  number,
  setNumber,
  termsAgree,
  setTermsAgree,
  performZipCodeQuery,
}) {
  const formatCpf = (cpf) => {
    if (cpf.length === 11) {
      const cpfDigits = cpf.replace(/\D/g, '');
      const firstDigits = cpfDigits.slice(0, 3);
      const lastDigits = cpfDigits.slice(-2);
      const middleAsterisks = '*'.repeat(6);
      return `${firstDigits}${middleAsterisks}${lastDigits}`;
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="h-[52px]">
        <Input
          label="Meu nome"
          type="text"
          placeholder="Nome Sobrenome"
          set={setName}
          value={name}
          required
        />
      </div>
      <div className="flex gap-8 h-[52px]">
        <div className="w-3/5">
          <Input
            label="Meu e-mail"
            type="text"
            placeholder="you@yourmail.com"
            set={setEmail}
            value={email}
            required
          />
        </div>
        <div className="w-2/5">
          <Input
            label="Data de nascimento"
            type="date"
            set={setAge}
            value={age}
            required
          />
        </div>
      </div>
      <div className="flex gap-8 h-[52px]">
        <Input
          label="Meu CPF"
          type="text"
          placeholder="999.999.999-99"
          set={setAge}
          value={formatCpf(cpf)}
          required
        />
        <Input
          label="Meu contato"
          type="text"
          placeholder="(99) 9 9999-9999"
          set={setPhone}
          value={phone}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-special">Senha</h2>
        <div className="flex gap-8 h-[52px]">
          <Input
            label="Senha atual"
            type="text"
            placeholder="******"
            set={setCurrentPassword}
            value={currentPassword}
            minLengt={6}
            required
          />
          <Input
            label="Nova senha"
            type="text"
            placeholder="******"
            set={setNewPassword}
            value={newPassword}
            minLengt={6}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-special">Endereço</h2>
        <div className="flex gap-8 h-[52px]">
          <div className="w-2/5">
            <div className="relative">
              <label className="absolute bg-white top-[-15%] left-[10%] px-[5%] font-secondary font-medium text-[#494949]">
                CEP
              </label>
              <input
                className="w-full bg-white border-2 border-primary h-[52px] rounded-[0.625rem] px-[1.02rem] text-[#494949] text-[13px] focus:outline-none"
                type="text"
                placeholder="xx.xxx-xxx"
                onBlur={() => performZipCodeQuery(cep)}
                onChange={(e) => setCep(e.target.value)}
                value={cep}
              />
            </div>
          </div>
          <div className="w-1/5">
            <Input
              label="Estado"
              type="text"
              placeholder="UF"
              set={setState}
              value={state}
            />
          </div>
          <div className="w-2/5">
            <Input
              label="Cidade"
              type="text"
              placeholder="Nome"
              set={setCity}
              value={city}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-8 h-[52px]">
        <div className="w-3/5">
          <Input
            label="Complemento"
            type="text"
            placeholder="Casa..."
            set={setComplement}
            value={complement}
            required
          />
        </div>
        <div className="w-2/5">
          <Input
            label="Numero"
            type="text"
            placeholder="Casa..."
            set={setNumber}
            value={number}
            required
          />
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <input
          className="appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary"
          type="checkbox"
          set={setEmail}
          value={termsAgree}
          onChange={() => setTermsAgree(!termsAgree)}
          required
        />
        <label htmlFor={termsAgree} className="font-special">
          Aceito os termos da plataforma quanto aos meus dados e entendo que não
          serão públicos, somente para validação de minha identidade e segurança
          de todos os usuários.
        </label>
      </div>
    </div>
  );
}
