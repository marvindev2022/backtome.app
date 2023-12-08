export default function SelectState({}) {
    return (
        <div className="relative">
            <label className="absolute bg-white top-[-15%] left-[10%] px-[5%] font-secondary font-medium text-[#494949]">Estado</label>
            <select className="w-full bg-white border-2 border-primary h-[52px] rounded-[0.625rem] px-[1.02rem] text-[#494949] text-[13px]" nome="state" 
                        onChange={(e) => setState(e.target.value)}>
                            <option value=''></option>
                            <option value='AC'>AC</option>
                            <option value='AL'>AL</option>
                            <option value='AP'>AP</option>
                            <option value='AM'>AM</option>
                            <option value='BA'>BA</option>
                            <option value='CE'>CE</option>
                            <option value='DF'>DF</option>
                            <option value='ES'>ES</option>
                            <option value='GO'>GO</option>
                            <option value='MA'>MA</option>
                            <option value='MT'>MT</option>
                            <option value='MS'>MS</option>
                            <option value='MG'>MG</option>
                            <option value='PA'>PA</option>
                            <option value='PB'>PB</option>
                            <option value='PR'>PR</option>
                            <option value='PE'>PE</option>
                            <option value='PI'>PI</option>
                            <option value='RJ'>RJ</option>
                            <option value='RN'>RN</option>
                            <option value='RS'>RS</option>
                            <option value='RO'>RO</option>
                            <option value='RR'>RR</option>
                            <option value='SC'>SC</option>
                            <option value='SP'>SP</option>
                            <option value='SE'>SE</option>
                            <option value='TO'>TO</option>
            </select>
        </div>
    )
}