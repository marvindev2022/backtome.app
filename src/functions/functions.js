import { format } from 'date-fns';

export function formatCpf(cpf) {
  cpf = cpf.replace(/\D/g, '');
  return cpf;
}

export function formatPhone(phone) {
  phone = phone.replace(/\D/g, '');
  const formattedPhone = `(${phone.substr(0, 2)}) ${phone.substr(
    2,
    5
  )}-${phone.substr(7)}`;
  return phone;
}

export function removeSpecialChars(string) {
  string = string.replace(/\D/g, '');
  return string;
}

export function formatDate(date) {
  return format(new Date(date), 'dd/MM/yyyy');
}
