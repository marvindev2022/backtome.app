import warning from '../../assets/ModalProfile/Warning.svg';
import close from '../../assets/ModalProfile/close.svg';

export default function ModalPerfil({setModalProfile, updateProfile}){
    return(
        <div className="modal" >
            <div className="flex flex-col bg-white z-30 rounded-[10px] w-[34rem] py-6 px-8 gap-3 shadow-gray-600 shadow-md">
                <div className='flex justify-between'>
                    <span className="font-main text-2xl">Alteração de dados</span>
                    <img className='cursor-pointer' src={close} alt="fechar" onClick={()=> setModalProfile(false)}/>
                </div>
                <div className='flex justify-between gap-9'>
                    <img className="ml-5" src={warning} alt="" />
                    <span className='font-secondary text-base font-light text-[#87898E]'>Todos os dados são criptografados para a segurança dos usuários da plataforma. Tem certeza que deseja altera-los?</span>
                </div>
                <button className='self-center bg-secondary text-white font-main text-2xl py-3 px-12 rounded-[10px]'
                onClick={(e) => updateProfile(e)}>Salvar</button>
            </div>
        </div>
    )
}