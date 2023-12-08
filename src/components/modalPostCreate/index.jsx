import { useState } from 'react';
import close from '../../assets/ModalProfile/close.svg';
import Input from '../input/form';
import share from '../../assets/modalPostCreate/share-06.svg';
import { toastFailWhite, toastSuccess } from '../../context/toast';
import axios from '../../Service/api';

export default function ModalPostCreate({ showModalPostChoice, setShowModalPostChoice, showModalPostCreate, setShowModalPostCreate, role }) {
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [cor, setCor] = useState('')
    const [size, setSize] = useState('')
    const [age, setAge] = useState('')
    const [ferido, setFerido] = useState(false)
    const [caracteristicas, setCaracteristicas] = useState('')
    const [local, setLocal] = useState('')
    const [data, setData] = useState('')
    const [bravo, setBravo] = useState(false)
    const [isItWithYou, setIsItWithYou] = useState(false)
    const [termsAgree, setTermsAgree] = useState(false)

    function closeModal() {
        setShowModalPostChoice(false);
        setShowModalPostCreate(false)
    }
    
    function validationTermsAgree(e) {
        e.preventDefault()
        e.stopPropagation()

        if (!termsAgree) {
          return toastFailWhite(
            'Você precisa confirmar que todas informações são verdadeiras para continuar!',
            'toastWhite'
          );
        }
    
        if(role === 'lost'){
            postPetLost();
        }

        if(role === 'find'){
            postPetFind();
        }
    }

    async function postPetLost(){

        const form = {
            species: especie,
            race: raca,
            age,
            color: cor,
            size,
            distinctive_characteristics: caracteristicas,
            date_loss: data,
            location_loss: local,
            sore: ferido,
            brave: bravo,
            user_id: "usuario id"
        }

        console.log(form);
        try {
            const { data } = await axios.post('/lost-animals/registered', form);
            closeModal()
            toastSuccess('Pet cadastrado com sucesso!','toastWhite')
        } catch (error) {
            
        }
    };

    async function postPetFind(){

        const form = {
            species: especie,
            race: raca,
            age,
            color: cor,
            size,
            distinctive_characteristics: caracteristicas,
            date_loss: data,
            location_loss: local,
            sore: ferido,
            isItWithYou,
            user_id: "usuario id"
        }

        console.log(form);
        try {
            const { data } = await axios.post('/lost-animals/registered', form);
            closeModal()
            toastSuccess('Pet cadastrado com sucesso!','toastWhite')
        } catch (error) {
            
        }
    };

    
    return(
        <div className="flex flex-col justify-center items-center gap-[1.36rem] w-[34rem] bg-white shadow-modal rounded-[0.57294rem] modal-dialog modal-lg px-[1.83rem] py-[1.38rem] absolute top-3">
                <div className="flex justify-between w-full">
                    {role === 'lost' && <span className='font-main text-[1.37506rem]'>Pet perdido</span>}
                    {role === 'find' && <span className='font-main text-[1.37506rem]'>Pet achado</span>}
                    <img className="cursor-pointer" onClick={closeModal} src={close}></img>
                </div>
                <form className="flex flex-col justify-center items-center gap-[1.30rem] w-full" onSubmit={(e)=>validationTermsAgree(e)}>
                    <div className='flex justify-center items-center w-full h-[5.875rem]'>
                        <div className='flex flex-col justify-center items-center w-[10.10894rem] h-[5.25181rem] border-dashed border-primary border-[1px] cursor-pointer' onClick=''>
                            <img src={share} alt='Compartilhar'/>
                            <span className='text-[#ADADAD] font-secondary text-[0.92819rem] font-light'>mín. 3</span>
                        </div>
                    </div>
                    <div className='w-full h-[5.15rem]'>
                        <Input 
                            label="Espécie*" 
                            type="text" 
                            placeholder="cachorro, gato..." 
                            set={setEspecie} 
                            value={especie} 
                            required={true} 
                        />
                    </div>
                    <div className='w-full h-[5.15rem]'>
                        <Input 
                            label="Raça" 
                            type="text" 
                            placeholder="raça no animal" 
                            set={setRaca} 
                            value={raca} 
                        />
                    </div>
                    <div className='flex w-full h-[5.15rem] gap-[1.94rem]'>
                        <div className='w-[55%] h-full'>
                            <Input 
                                label="Cor*" 
                                type="text" 
                                placeholder="caramelo..." 
                                set={setCor} 
                                value={cor} 
                                required={true} 
                            />
                        </div>
                        <div className='flex flex-col gap-3 mt-[-1rem]'>
                            <span>Porte*</span>
                            <div className='flex justify-between gap-[1.75rem] w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value='pequeno' name='size' onChange={() => setSize('pequeno')} />
                                        <label htmlFor='size' className="font-special">
                                            Pequeno
                                        </label>
                                    </div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value='medio' name='size' onChange={() => setSize('medio')} />
                                        <label htmlFor='size' className="font-special">
                                            Médio
                                        </label>
                                    </div>
                                </div>      
                                <div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value='grande' name='size' onChange={() => setSize('grande')} />
                                        <label htmlFor='size' className="font-special">
                                            Grande
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full h-fit gap-[1.94rem]'>
                        <div className='flex flex-col w-[55%] gap-3'>
                            <span>Idade</span>
                            <div className='flex gap-[1.75rem] w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value='Filhote' name='age' onChange={() => setAge('Filhote')} />
                                        <label htmlFor='age' className="font-special">
                                            Filhote
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value='adulto' name='age' onChange={() => setAge('adulto')} />
                                        <label htmlFor='age' className="font-special">
                                            Adulto
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value='idoso' name='age' onChange={() => setAge('idoso')} />
                                        <label htmlFor='age' className="font-special">
                                            Idoso
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span>Ferido*</span>
                            <div className='flex justify-between gap-[1.75rem] w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value={true} name='sore' onChange={() => setFerido(true)} />
                                        <label htmlFor='sore' className="font-special">
                                            Sim
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value={false} name='sore' onChange={() => setFerido(false)} />
                                        <label htmlFor='sore' className="font-special">
                                            Não
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[5.15rem]'>
                        <Input 
                            label="Características distintivas do animal" 
                            type="text" 
                            placeholder="Mensagem..." 
                            set={setCaracteristicas} 
                            value={caracteristicas} 
                        />
                    </div>
                    <div className='w-full h-[5.15rem]'>
                        <Input 
                            label="Local" 
                            type="text" 
                            placeholder="onde foi encontrado o animal" 
                            set={setLocal} 
                            value={local} 
                        />
                    </div>
                    <div className='flex w-full h-[5.15rem] gap-[1.94rem]'>
                        <div className='w-[55%] h-full'>
                            <Input 
                                label="Data" 
                                type="date" 
                                placeholder="" 
                                set={setData} 
                                value={data} 
                            />
                        </div>
                        {role === 'lost' && <div className='flex flex-col gap-3 mt-[-1rem]'>
                            <span>Animal é bravo?</span>
                            <div className='flex justify-between gap-[1.75rem] w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value={true} name='brave' onChange={() => setBravo(true)} />
                                        <label htmlFor='brave' className="font-special">
                                            Sim
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value={false} name='brave' onChange={() => setBravo(false)} />
                                        <label htmlFor='brave' className="font-special">
                                            Não
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {role === 'find' && <div className='flex flex-col gap-3 mt-[-1rem]'>
                            <span>Levou o animal para casa?</span>
                            <div className='flex gap-[1.75rem] w-full'>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value={true} name='isItWithYou' onChange={() => setIsItWithYou(true)} />
                                        <label htmlFor='isItWithYou' className="font-special">
                                            Sim
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[0.38rem] items-center">
                                        <input className='appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary' type='radio' value={false} name='isItWithYou' onChange={() => setIsItWithYou(false)} />
                                        <label htmlFor='isItWithYou' className="font-special">
                                            Não
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='w-full mt-[-0.93rem]'>
                        <div className="flex gap-[0.53rem] items-center">
                            <input
                              className="appearance-none shrink-0 w-5 h-5 border-[2px] rounded border-primary border-solid checked:bg-primary"
                              type="checkbox"
                              value={termsAgree}
                              onChange={() => setTermsAgree(!termsAgree)}
                            />
                            <label htmlFor={termsAgree} className="font-special">
                                Declaro que todas as informações são veridicas afim de 
                                ajudar outros usuários a encontrarem seu Pet.
                            </label>
                        </div>
                    </div>
                    <button className="flex justify-center items-center w-[9.3125rem] h-[3.4375rem] bg-secondary rounded-[0.57294rem] font-main text-[1.22881rem] text-white"
                    >Postar</button>
                </form>
        </div>
    )
}