import { useState } from 'react'
import * as S from './SearchStyle'
import Results from '../Results/Results'
import InputMask from 'react-input-mask';
import { insertDb, readDb } from '../../firebase/Firebase';

interface IResult{
    cep: string,
    logradouro: string,
    complemento: string, 
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

export default function Search() {
    const [data, setData] = useState<IResult | undefined>(undefined)
    const [cep, setCep] = useState('')

    async function getCep(cep: string) {
        const response = await fetch(/* `/api/${cep}` */`https://viacep.com.br/ws/${cep}/json/`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        const data = await response.json()

        if(data.erro !== "true") 
            return data
        return undefined
    }

    async function checkDb(){
        const read = await readDb(cep)
        
        if(read === "not found"){
            const data: IResult = await getCep(cep)
            insertDb(data)
            setData(data)
        }else{
            setData(read)
        }
    }
  
    return (
        <S.ResultArea>
            <p>Informe o CEP: </p>

            <InputMask 
                mask="99999-999" 
                type="text" 
                placeholder="00000-000"
                value={cep} 
                onChange={(e) => setCep(e.target.value)} 
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        checkDb()
                    }
                }}
                style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}}
            />

            <S.Button 
                onClick={() => {
                    checkDb()
                }}
            >
                Pesquisar
            </S.Button>
            
            {data !== undefined && <Results result={data} />}   
      </S.ResultArea>     
    )
}
