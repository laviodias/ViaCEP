import { useState } from 'react'
import * as S from './SearchStyle'
import Results from '../Results/Results'
import InputMask from 'react-input-mask';
import logo from '../../assets/logoBranca.png'
import LastSearches from './LastSearches';
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

    async function callbackLastSearches(cep: string){
        setCep(cep)
        const read = await readDb(cep)
        setData(read)
    }

    function callbackResults(){
        setData(undefined)
        setCep('')
    }
  
    return (
    <S.Container>
        <S.SearchArea>
            <img src={logo} alt="Logo" height={100} />
            <p>Pesquise por CEPs de todo o Brasil</p>

            <InputMask 
                mask="99999-999" 
                type="text" 
                placeholder="Digite aqui o CEP"
                value={cep} 
                onChange={(e) => setCep(e.target.value)} 
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        checkDb()
                    }
                }}
                style={{padding: 16, width: 300, fontSize: 24, borderRadius: 4, border: '1px solid #ccc'}}
            />

            <S.Button 
                onClick={() => {
                    checkDb()
                }}
            >
                Buscar
            </S.Button>
        </S.SearchArea>    
        {data !== undefined ? <Results result={data} callback={callbackResults}/> : <LastSearches callback={callbackLastSearches} /> }  
    </S.Container>
    )
}
