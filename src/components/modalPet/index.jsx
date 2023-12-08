import btnClosed from '../../assets/modalEndChat/btn-closed.svg';
import imageAnimal from '../../assets/ImageAnimal.svg';
import { formatDate } from '../../functions/functions';
import iconDate from '../../assets/modalPet/date.svg';

export default function ModalPet({ setShowModal, showModal }) {
  console.log(showModal);
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#ffffff85] overflow-hidden">
      <div
        className={`relative flex flex-col justify-between bg-[#FCFCFD] rounded-xl shadow-around w-[46rem] h-[33rem] px-10 py-6 gap-5 border-2 border-solid font-main text-xl font-normal ${
          showModal.type === 'Perdido'
            ? 'border-primary text-primary'
            : 'border-secondary text-secondary'
        }`}
      >
        <img
          className="absolute top-5 right-5 cursor-pointer"
          src={btnClosed}
          alt="button Closed"
          onClick={() => {
            setShowModal('');
          }}
        />
        <h2>{showModal.type}</h2>
        <div className="flex items-center justify-center">
          <img className="w-36 h-28" src={imageAnimal} alt="" />
        </div>
        <div className="flex justify-between h-full w-full">
          <div className="flex flex-col justify-between h-full w-2/5">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <h2>Espécie:</h2>
                <h2 className="font-secondary text-base text-[#494949]">
                  {showModal.species}
                </h2>
              </div>
              <div className="flex items-baseline gap-3">
                <h2>Raça:</h2>
                <h2 className="font-secondary text-base text-[#494949]">
                  {showModal.race}
                </h2>
              </div>
              <div className="flex items-baseline gap-3">
                <h2>Porte:</h2>
                <h2 className="font-secondary text-base text-[#494949]">
                  {showModal.size}
                </h2>
              </div>
              <div className="flex items-baseline gap-3">
                <h2>Cor:</h2>
                <h2 className="font-secondary text-base text-[#494949]">
                  {showModal.color}
                </h2>
              </div>
              <div className="flex items-baseline gap-3">
                <h2>Idade:</h2>
                <h2 className="font-secondary text-base text-[#494949]">
                  {showModal.age}
                </h2>
              </div>
              <div className="flex items-baseline gap-3">
                <h2>Ferido:</h2>
                <h2 className="font-secondary text-base text-[#494949]">
                  {showModal.species}
                </h2>
              </div>
              {showModal.type !== 'Perdido' && (
                <div className="flex items-baseline gap-3">
                  <h2>Levei para casa:</h2>
                  <h2 className="font-secondary text-base text-[#494949]">
                    {showModal.species}
                  </h2>
                </div>
              )}
            </div>
            <h2 className="flex gap-3 text-3xl">
              <img src={iconDate} alt="" />
              {formatDate(showModal.createdAt)}
            </h2>
          </div>
          <div className="w-3/5 flex flex-col justify-between">
            <div>
              <h2>Características distintivas do animal:</h2>
              <h2 className="font-secondary text-base text-[#494949] min-h-[6rem] max-h-[6rem]">
                {showModal.distinctive_characteristics}
              </h2>
            </div>
            <div>
              <h2>Local:</h2>
              <h2 className="font-secondary text-base text-[#494949] min-h-[3rem] max-h-[3rem]">
                {showModal.type === 'Achado'
                  ? showModal.found_location
                  : showModal.location_loss}
              </h2>
            </div>
            <div className="text-gray-500 h-14 cursor-pointer mb-4">
              <label
                className="flex w-fit justify-center relative bg-white font-secondary px-1 py-0 font-medium text-sm top-3 left-[12%]"
                htmlFor="chat"
              >
                Mensagem
              </label>
              <input
                className={`w-full border-2 border-solid outline-none ${
                  showModal.type === 'Perdido'
                    ? 'border-primary'
                    : 'border-secondary'
                } rounded-xl shadow-lg font-secondary font-light text-sm text-gray-500 bg-transparent h-full 1366:h-[80%] px-8 py-5 cursor-pointer`}
                disabled
                placeholder="iniciar chat..."
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
