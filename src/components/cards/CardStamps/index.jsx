import identidade from '../../../assets/card/CardStamp/Identidade.svg';
import voluntario from '../../../assets/card/CardStamp/voluntario.svg';
import reencontro from '../../../assets/card/CardStamp/reencontro.svg';
import add from '../../../assets/card/CardStamp/add.svg';
import more from '../../../assets/card/CardStamp/more.svg';
import { useState } from 'react';
import BalloonStamp from '../../balloonstamp';
import api from './../../../Service/api';
import { toastFailWhite, toastSuccess } from '../../../context/toast';
export default function CardStamp({ type, isVerified, setRender }) {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await api.post(
        `file/${localStorage.getItem('id')}/upload-doc`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 201) {
        toastSuccess('Doc enviado com sucesso!');
        setSelectedFile(null);
        setRender(true);
      }
    } catch (error) {
      toastFailWhite('erro interno', 'toastWhite');
    }
  };
  return (
    <>
      {type === 'identidade' ? (
        <div className="flex justify-between items-center shadow-gray-600 shadow-md h-[3.75rem] rounded-md">
          <div className="flex gap-4 items-center">
            <div className="h-[1.875rem] w-[0.1875rem] justify-self-start bg-secondary rounded-[0.3125rem]" />
            <img src={identidade} alt="" />
            <span className="font-secondary text-xs font-extralight text-[#494949]">
              Verificação de identidade
            </span>
          </div>
          <div className="flex gap-2 mr-4 relative">
            {showOne && <BalloonStamp />}
            {!isVerified && (
              <div>
                <label htmlFor="docInput" type="button">
                  <img className="cursor-pointer" src={add} alt="enviar doc" />
                </label>
                <input
                  id="docInput"
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
            )}
          </div>
          {selectedFile && (
            <button className=" mr-2 cursor-pointer" onClick={handleUpload}>
              Salvar
            </button>
          )}
        </div>
      ) : (
        ''
      )}
      {type === 'voluntario' ? (
        <div className="flex justify-between items-center shadow-gray-600 shadow-md h-[3.75rem] rounded-md">
          <div className="flex gap-4 items-center">
            <div className="h-[1.875rem] w-[0.1875rem] justify-self-start bg-primary rounded-[0.3125rem]" />
            <img src={voluntario} alt="" />
            <span className="font-secondary text-xs font-extralight text-[#494949]">
              Voluntário BackToMe
            </span>
          </div>
          <div className="flex gap-2 mr-4 relative">
            <img
              src={more}
              alt="Mais informações"
              onMouseEnter={() => setShowTwo(true)}
              onMouseLeave={() => setShowTwo(false)}
            />
            {showTwo && <BalloonStamp />}
          </div>
        </div>
      ) : (
        ''
      )}
      {type === 'reencontro' ? (
        <div className="flex justify-between items-center shadow-gray-600 shadow-md h-[3.75rem] rounded-md">
          <div className="flex gap-4 items-center">
            <div className="h-[1.875rem] w-[0.1875rem] justify-self-start bg-[#E95B47] rounded-[0.3125rem]" />
            <img src={reencontro} alt="" />
            <span className="font-secondary text-xs font-extralight text-[#494949]">
              Reencontro
            </span>
          </div>
          <div className="flex gap-2 mr-4 relative">
            <img
              src={more}
              alt="Mais informações"
              onMouseEnter={() => setShowThree(true)}
              onMouseLeave={() => setShowThree(false)}
            />
            {showThree && <BalloonStamp />}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
