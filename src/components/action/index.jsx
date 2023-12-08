import iconDelete from '../../assets/help/delete.svg';
import iconReport from '../../assets/help/report.svg';
import Button from '../button';

export default function Action({ onClick, type, text, p, textBtn }) {
  return (
    <div className="border-primary border-2 border-solid rounded-md p-4 flex flex-col gap-3 1536:gap-1 1440:gap-1 1366:gap-1 w-[302px]">
      <h2 className="text-[#23262F] font-main text-base 1536:text-[0.7rem] 1440:text-[0.7rem] 1366:text-[0.7rem] font-normal">
        {text}
      </h2>
      <div className="flex justify-center w-full h-fit px-5 1536:px-2 1440:px-2 1366:px-1 gap-5 1366:gap-3">
        <img
          className=""
          src={type === 'delete' ? iconDelete : iconReport}
          alt={`icon ${type}`}
        />
        <p className="text-[#87898E] font-secondary text-[0.75rem] 1536:text-[0.6rem] 1366:text-[0.5rem]">
          {p}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Button
          onClick={onClick}
          type="button"
          className="bg-[#231E54] w-20 h-8 text-white font-main text-xs"
          text={textBtn}
        />
      </div>
    </div>
  );
}
