import { useState } from "react"
import { getLastSearches } from "../../firebase/Firebase"
import * as S from "./SearchStyle"

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

interface IProps {
    callback: (data: string) => void
}

export default function LastSearches({ callback }: IProps) {
    const [lastSearches, setLastSearches] = useState([])

    async function getLastSearchesFromFirebase() {
        const lastSearches = await getLastSearches()
        const lastSearchesArray = Object.values(lastSearches).splice(0, 3)
        
        if(lastSearchesArray.length === 3) {
            setLastSearches(lastSearchesArray)
        }
    }

    if(lastSearches.length < 3) {
        getLastSearchesFromFirebase()
    }

    return (
        <S.LastSearchArea>
            <h3>CEPs pesquisados recentemente:</h3>
            <S.CardsArea>
                {lastSearches.length === 3 ? lastSearches.map((search: IResult) => (
                    <S.SearchCard key={search.cep} onClick={() => {
                        callback(search.cep)
                    }}>
                        <p>{search.localidade}</p>
                        <p>{search.cep}</p>
                    </S.SearchCard>
                )) : <p>Nenhuma pesquisa recente</p>}
            </S.CardsArea>
        </S.LastSearchArea>
    )
}
