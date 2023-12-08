import Notification from '../../assets/profile/Notification.svg'
import Message from '../../assets/profile/Message.svg'

export default function ProfileHeader() {
    return (
    <div className="justify-between w-full px-7 py-9">
        <div className='flex flex-row justify-between w-full pb-3'>
            <h1 className="text-4xl font-special">Meu Perfil</h1>
            <div className="flex flex-row gap-7 px-8">
                <img className='cursor-pointer' src={Notification} alt="Notificação" />
                <img className='cursor-pointer' src={Message} alt="Mensagens" />
            </div>
        </div>
        <div className='h-[1px] bg-gradient-to-r from-white via-primary to-white'></div>
    </div>
    );
};
