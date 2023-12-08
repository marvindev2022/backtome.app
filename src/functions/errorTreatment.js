import { validate } from "gerador-validador-cpf";
import { toastFailWhite } from "../context/toast";

export function validadeInputs(input, data) {
  if (input === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data)) {
      toastFailWhite("O email é inválido!", "toastWhite");
      return true;
    }
  }
  if (input === "cpf") {
    const verifyCPF = validate(data);
    if (!verifyCPF) {
      toastFailWhite("O cpf digitado é inválido!", "toastWhite");
      return true;
    }
  }

  return false;
}

export function verifyInputs(inputs) {
  for (const input in inputs) {
    if (!inputs[input]) {
      toastFailWhite(`O campo ${input} é obrigatório!`, "toastWhite");
      return true;
    }
  }
  return false;
}

export function verifyPassword(inputs) {
  for (const input in inputs) {
    if (!inputs[input]) {
      toastFailWhite(`O campo ${input} é obrigatório!`, "toastWhite");
      return true;
    }
  }
  return false;
}
