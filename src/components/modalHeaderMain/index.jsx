import img from '../../assets/modalHeaderMain/img.svg';
import { notificacoes } from '../../data/notificacoes';

export default function ModalHeaderMain() {
  return (
    <div className="absolute bg-white w-64 h-80 flex flex-col top-32 right-10 z-10">
      <div className="relative">
        <img
          className="absolute -top-[1.67rem] right-14 w-10 h-10 z-10"
          src={img}
          alt=""
        />
        <div className="absolute w-64 h-80 border-2 border-primary rounded-xl overflow-y-scroll scrollbar-thin scrollbar-thumb-primary">
          {notificacoes.map(({ msg }, key) => {
            return (
              <div
                key={key}
                className="font-secondary text-xs font-extralight border-b-[0.06rem] border-[#494949] mt-5 mx-3 pb-2 "
              >
                <h2>{msg}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
