import { validate } from 'gerador-validador-cpf';
import * as Yup from 'yup';

const name = Yup.string()
  .required('O nome é obrigatório')
  .min(3, 'O nome deve ter pelo menos 3 caracteres');

const email = Yup.string()
  .email('O e-mail deve ser um endereço válido')
  .matches(/^\S+@\S+\.\S+$/, 'Insira um email válido')
  .required('O e-mail é obrigatório');

const cpf = Yup.string()
  .test('Ok', 'Número de CPF inválido', validate)
  .required('O CPF é obrigatório.');

const phone = Yup.string()
  .required('O telefone é obrigatório.')
  .length(15, 'O telefone deve ter 11 dígitos.')
  .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido.');

const formattedPhone = Yup.string()
  .required('O telefone é obrigatório.')
  .length(11, 'O telefone deve ter 11 dígitos.');

const password = Yup.string()
  .min(6, 'A senha deve ter no mínimo 6 caracteres')
  .required('A senha é obrigatória');

const confPassword = Yup.string()
  .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais')
  .required('A confirmação de senha é obrigatória');

export const schemaFirstStepValidation = Yup.object({
  name,
  email,
});

export const schemaSecondStepValidation = Yup.object({
  cpf,
  phone,
});

export const schemaFinalStepValidation = Yup.object({
  password,
  confPassword,
});

export const schemaLoginValidation = Yup.object({
  email,
  password,
});

export const schemaRecoverValidation = Yup.object({
  email,
  cpf,
});

export const schemaRegisterUser = Yup.object({
  name,
  email,
  cpf,
  phone: formattedPhone,
  password,
});
