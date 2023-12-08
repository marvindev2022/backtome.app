import FosterSearch from "../../components/fosterSearch";
import ResponsibleAdoption from "../../components/responsibleAdoption";
import FosterImg from '../../assets/foster/fosterimg.svg';
import { useState } from 'react';

export default function MainAdoption() {
    const [main, setMain] = useState(true);
    const scale = "scale-50";
    
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col items-center w-full z-10">
                <div className="self-start absolute top[169px]">
                    <ResponsibleAdoption/>
                </div>
                <div  className="bottom-16 absolute flex">
                    <FosterSearch main={main} scale={scale}/>
                </div>
            </div>
            <img className="img-foster absolute right-0 top-[7.64rem] h-[493.39px] w-auto" src={FosterImg} alt="" />
        </div>
    )
}