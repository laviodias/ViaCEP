import * as S from './ResultsStyle';
import maps from '../../assets/maps.png'
import { Dispatch, SetStateAction } from 'react';

interface IResult{
    result: {
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
}

interface ICallback {
    callback: () => void
}

type Props = IResult & ICallback;

export default function Results(props: Props) {
    const link = `https://www.google.com/maps/search/?api=1&query=${props.result.logradouro}+${props.result.bairro}+${props.result.localidade}+${props.result.uf}`;
    
    return (
        <S.ResulstContainer>
            <p>O CEP pesquisado se refere à cidade de {props.result.localidade} - {props.result.uf}</p>
            {props.result.logradouro !== '' && <p>Logradouro: {props.result.logradouro}, 
            {props.result.complemento !== '' && <span> {props.result.complemento},</span>}
            {props.result.bairro !== '' && <span> bairro {props.result.bairro}</span>}</p>}
            {props.result.ddd !== '' && <p>DDD: {props.result.ddd}</p>}
            
            <a href={link} target="_blank"><img src={maps} alt="Google Maps" height={80}/></a>

            <S.BackButton onClick={() => {props.callback()}}>Voltar</S.BackButton>
        </S.ResulstContainer>
    )
}
