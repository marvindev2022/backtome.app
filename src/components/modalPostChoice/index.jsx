import {  useState } from 'react';
import close from '../../assets/ModalProfile/close.svg';
import ModalPostCreate from '../../components/modalPostCreate';

export default function ModalPostChoice({ showModalPostChoice, setShowModalPostChoice }) {
    const [showModalPostCreate, setShowModalPostCreate] = useState(false);
    const [showCard, setShowCard] = useState(true);
    const [role, setRole] = useState('');

    function handleModalPostCreateLost(){
        setRole('lost')
        setShowCard(false)
        setShowModalPostCreate(true)
    }

    function handleModalPostFind(){
        setRole('find')
        setShowCard(false)
        setShowModalPostCreate(true)
    }
    
    return(
        <div className="flex justify-center items-center modal fade">
            {showModalPostCreate && <ModalPostCreate showModalPostChoice={showModalPostChoice} setShowModalPostChoice={setShowModalPostChoice} showModalPostCreate={showModalPostCreate} setShowModalPostCreate={setShowModalPostCreate} role={role}/>}
            {showCard && 
            <div className="flex flex-col justify-center items-center gap-[1.36rem] w-[32rem] h-40 bg-white shadow-modal rounded-[0.57294rem] modal-dialog modal-lg px-[1.83rem] py-[1.38rem]">
                <div className="flex justify-between w-full">
                    <span className='font-main text-[1.37506rem]'>Qual o motivo do post?</span>
                    <img className="cursor-pointer" onClick={() => setShowModalPostChoice(false)} src={close}></img>
                </div>
                <div className="flex gap-[0.69rem]">
                    <button className="flex justify-center items-center w-[9.3125rem] h-[3.4375rem] bg-[#E95B47] rounded-[0.57294rem] font-main text-[1.22881rem] text-white"
                    onClick={handleModalPostCreateLost}
                    >Perdi meu pet</button>
                    <button className="flex justify-center items-center w-[9.3125rem] h-[3.4375rem] bg-secondary rounded-[0.57294rem] font-main text-[1.22881rem] text-white"
                    onClick={handleModalPostFind}
                    >Achei um pet</button>
                </div>
            </div>}
        </div>
    )
}