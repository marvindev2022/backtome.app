import { questions } from '../../data/faq';
import Question from '../question';
import arrowDown from '../../assets/help/arrow-down.svg';
import { useState } from 'react';
import Action from '../action';
import cat from '../../assets/help/cat.gif';
import iconDelete from '../../assets/help/delete.svg';
import iconReport from '../../assets/help/report.svg';
import Modal from '../modal';

export default function Help() {
  const [faq, setFaq] = useState(questions);
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal(e, type) {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(type);
  }

  return (
    <div className="flex flex-col w-full h-[90%] pt-8 gap-8 1366:gap-2">
      <h2 className="text-[#060606] font-special text-xl font-normal">
        Perguntas frequentes
      </h2>
      <div className="flex gap-14 h-full items-center">
        <div className=" w-3/4 flex flex-col justify-between overflow-y-scroll max-h-full 1536:max-h-[90%] 1440:max-h-[90%] 1366:relative 1366:max-h-[90%] scrollbar-thin scrollbar-thumb-primary ">
          <div className="flex flex-col gap-4">
            {faq.map((question) => {
              return (
                <div
                  className={`cursor-pointer relative flex items-center justify-between px-7 py-5 max-w-[95%] 1536:py-2 1440:py-3 1440:pr-[4.1rem] 1366:py-3 ${
                    question.colapsed ? 'max-h-full' : 'max-h-fit'
                  } border-[1px] border-solid border-primary rounded-md transition-all duration-500 ease-in-out`}
                  key={question.id}
                >
                  <Question
                    colapsed={question.colapsed}
                    question={question.question}
                    answer={question.answer}
                  />
                  <img
                    onClick={() => {
                      const updatedFaq = faq.map((q) =>
                        q.id === question.id
                          ? { ...q, colapsed: !q.colapsed }
                          : { ...q, colapsed: false }
                      );
                      setFaq(updatedFaq);
                    }}
                    className={`absolute top-4 1536:top-2 1366:top-3 right-8 transition-all duration-300 ease-in-out ${
                      question.colapsed ? 'rotate-180' : 'rotate-0'
                    }`}
                    src={arrowDown}
                    alt="icon Arrow Down"
                  />
                </div>
              );
            })}
          </div>
          <h2 className="text-[#23262F] font-main text-xl font-normal text-center w-full">
            Não encontrou sua dúvida? Nos envie uma mensagem
            <span className="cursor-pointer text-primary"> CLICANDO AQUI</span>
          </h2>
        </div>
        {localStorage.getItem('token') && (
          <div className="w-1/4 h-[90%] flex flex-col gap-11 1536:self-start 1440:self-start 1536:gap-2 1366:gap-4 self-end 1366:self-start">
            <Action
              onClick={(e) => handleOpenModal(e, 'Excluir')}
              type="delete"
              text="Excluir conta"
              p="Ao excluir sua conta todos os seus dados serão deletados da nossa plataforma de forma irreversível. Tem certeza que deseja exclui-la?"
              textBtn="Excluir"
            />
            <Action
              onClick={(e) => handleOpenModal(e, 'Denunciar')}
              type="denuncia"
              text="Fazer denúncia"
              p="Denunciando alguma situação suspeita nos ajuda a manter a plataforma mais segura para todos os usuários."
              textBtn="Denunciar"
            />
            <img
              className="flex w-96 1536:w-72 1440:w-72 1366:w-52 absolute bottom-0"
              src={cat}
              alt="Img Paulo's Cat"
            />
          </div>
        )}
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          type={showModal}
          title={showModal === 'Excluir' ? 'Excluir conta' : 'Fazer denúncia'}
          img={showModal === 'Excluir' ? iconDelete : iconReport}
          text={
            showModal === 'Excluir'
              ? 'Ao excluir sua conta todos os seus dados serão deletados da nossa plataforma de forma irreversível. Tem certeza que deseja exclui-la?'
              : 'Denunciando alguma situação suspeita nos ajuda a manter a plataforma mais segura para todos os usuários.'
          }
          textBtn={showModal === 'Excluir' ? 'Excluir' : 'Denunciar'}
        />
      )}
    </div>
  );
}
