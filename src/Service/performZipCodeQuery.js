import axios from "axios";

async function performZipCodeQuery(zipdCode) {
  const response = {
    zipdCodeData: {},
    error: "",
  };

  try {
    const url = `https://viacep.com.br/ws/${zipdCode}/json/`;

    const responseApi = (await axios.get(url)).data;

    if (responseApi.erro) {
      response.error = "Dados para preenchimento automático não encontrado";
    } else {
      response.zipdCodeData = responseApi;
    }

  } catch (error) {
    response.error = "Erro ao buscar dados";
  }
  return response;
}

export default performZipCodeQuery;
