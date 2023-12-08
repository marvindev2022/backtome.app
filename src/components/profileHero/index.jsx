import React, { useState } from 'react';
import avatar from '../../assets/profileHeroCard/Avatar Image.png';
import edit from '../../assets/profileHeroCard/edit.svg';
import identidade from '../../assets/card/CardStamp/Identidade.svg';
import api from '../../Service/api';
import { toastSuccess } from '../../context/toast';

const id = localStorage.getItem('id');
export default function ProfileHeroCard({
  name,
  email,
  isVerified,
  photo,
  setRender,
}) {
  const [selectedImage, setSelectedFile] = useState(null);

  const handleUpload = async () => {
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await api.post(`file/${id}/upload-img`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        toastSuccess('Imagem enviada com sucesso!');
        setSelectedFile(null);
        setRender(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col border-2 border-solid border-primary w-full h-[22rem] rounded-[10px] shadow-gray-600 shadow-md items-center justify-around ">
      <div className="relative">
        <div className="border-2 border-solid border-secondary rounded-[50%] h-40 w-40 p-[0.82rem]">
          <img
            className="rounded-[50%] max-w-[10.5rem] max-h-[10.5rem] w-[100%] h-[100%] object-cover"
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : photo ?? avatar
            }
            alt=""
          />
        </div>
        <div>
          <label
            htmlFor="fileInput"
            className="flex justify-center items-center rounded-[50%] bg-primary w-[2.5rem] h-[2.5rem] shadow-gray-600 shadow-md absolute top-4 right-[-0.61rem]"
            type="button"
          >
            <img className="cursor-pointer" src={edit} alt="Editar" />
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center font-special text-xl font-bold">
          {name ? name : 'Nome Do Ser Humano'}
        </h1>
        <h2 className="text-center font-special">
          {email ? email : 'you@yourmail.com'}
        </h2>
      </div>
      <div className="mb-5">
        {!isVerified && (
          <p className="font-secondary text-primary underline">Nenhum selo</p>
        )}
        {isVerified && <img src={identidade} alt="Verificado" />}
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      {selectedImage && (
        <button className="cursor-pointer" onClick={handleUpload}>
          Salvar Foto
        </button>
      )}
    </div>
  );
}
