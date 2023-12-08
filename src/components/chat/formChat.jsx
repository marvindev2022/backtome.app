
export default function FormChat({handleSendMessage,
    newMessage,
    setNewMessage,
    }){

    return(
        <form className="flex justify-between p-4 relative w-full" onSubmit={handleSendMessage}>
        <input
          className=" flex-grow px-2 py-1 border rounded-l-lg w-full h-[70px] p-[0 20px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] gap-[11.22px] border-[1.64px] border-yellow-500"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <label className="bg-white w-[110px] h-[30px] text-center absolute ml-[50px] mt-[-9px] text-sm font-secundary font-light leading-[16px] tracking-[0em]">Mensagem</label>
       <span className='font-special text-[18px] font-normal leading-[21px] tracking-[0.01em] text-center underline w-[75px] absolute right-14 top-10'>Ver post</span>
      </form>
    )
}