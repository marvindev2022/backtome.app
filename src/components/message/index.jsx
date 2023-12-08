import { useEffect, useState } from 'react';
import { messageData } from '../../data/mensagens';
import Chat from '../chat/chatApp';
import { convertTimestampToDate } from '../../utils/convertTime';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Message() {
  const messages = messageData().groupedMessages;
  const [filterMessages, setFilterMessages] = useState(messages);
  const [position, setPosition] = useState('Todas');
  const [chatOpen, setChatOpen] = useState(false);
  const [receiverId, setReceiverId] = useState(
    '123d7746-ed62-4b08-b15e-60609c10aa4d'
  );

  function filter(e, filter) {
    e.preventDefault();
    e.stopPropagation();
    let allMessages = messages;
    if (filter) {
      allMessages = allMessages.filter((message) => message.tipo === filter);
      setPosition(filter);
      return setFilterMessages(allMessages);
    }
    setFilterMessages(messages);
    setPosition('Todas');
  }

  useEffect(() => {
    setFilterMessages(messages);
  }, [messages]);
  return (
    <>
      {!chatOpen && (
        <div className="w-full pt-14">
          <div className="w-full">
            <div className="relative flex w-4/5 text-[#060606] font-main font-normal text-lg border-b-[0.5px] border-solid border-[#494949] pb-4 ">
              <div
                className={`absolute -bottom-[0.1rem] border-b-4 border-solid border-secondary w-24 transition-all ease-in-out duration-500 ${
                  position === 'Todas'
                    ? 'left-10'
                    : position === 'Sucesso'
                    ? 'left-48'
                    : position === 'Voluntario'
                    ? 'left-[21.8rem]'
                    : 'left-[32rem]'
                }`}
              />
              <h2
                onClick={(e) => filter(e)}
                className="w-1/6 cursor-pointer text-center relative"
              >
                Todas
                {position === 'Todas' && (
                  <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                    {filterMessages.length}
                  </b>
                )}
              </h2>
              <h2
                onClick={(e) => filter(e, 'Sucesso')}
                className="w-1/6 cursor-pointer text-center relative"
              >
                Sucesso
                {position === 'Sucesso' && (
                  <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                    {filterMessages.length}
                  </b>
                )}
              </h2>
              <h2
                onClick={(e) => filter(e, 'Voluntario')}
                className="w-1/6 cursor-pointer text-center relative"
              >
                Voluntário
                {position === 'Voluntário' && (
                  <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                    {filterMessages.length}
                  </b>
                )}
              </h2>
              <h2
                onClick={(e) => filter(e, 'Report')}
                className="w-1/6 cursor-pointer text-center relative"
              >
                Report
                {position === 'Report' && (
                  <b className="absolute rounded-[50%] w-5 h-5 bg-secondary text-white text-center text-[12px] items-center flex justify-center top-0 right-5">
                    {filterMessages.length}
                  </b>
                )}
              </h2>
            </div>
            <div className="flex flex-col w-full max-h-[39rem] gap-12 mt-9 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#231E54] px-3">
              {filterMessages.map((data, index) => (
                <div key={index}>
                  <div
                    className="flex justify-between w-full text-lg font-special font-normal text-[#060606] cursor-pointer"
                    key={data.messages[0].id}
                    onClick={() => {
                      setChatOpen(!chatOpen);
                      setReceiverId(data.userData.id);
                    }}
                  >
                    <h2 className="w-1/5 truncate">{data.userData.name}</h2>
                    <h2 className="w-1/5 truncate">{data.messages[0].title}</h2>
                    <h2 className="w-1/5 truncate">
                      {formatDistanceToNow(
                        convertTimestampToDate(
                          data.messages[data.messages.length - 1].createdAt
                        ),
                        {
                          locale: ptBR,
                          addSuffix: true,
                        }
                      )}
                    </h2>
                    <h2
                      className={`flex justify-center items-center text-white text-sm font-main rounded-xl h-9 w-20 truncate tracking-[0.009rem] ${
                        !data.messages[0].resolutionDescription
                          ? ''
                          : data.messages[0].resolved
                          ? 'bg-[#FBAD36]'
                          : 'bg-[#E95B47]'
                      }`}
                    >
                      {!data.messages[0].resolutionDescription
                        ? ''
                        : data.messages[0].resolved
                        ? 'Sucesso'
                        : 'Falha'}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {chatOpen && (
        <Chat
          receiverId={receiverId}
          setChatOpen={setChatOpen}
          chatOpen={chatOpen}
        />
      )}
    </>
  );
}
