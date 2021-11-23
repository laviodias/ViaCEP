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

export default function Results({ result }: IResult) {
    return (
        <div>
            <p>O CEP pesquisado se refere à cidade de {result.localidade} - {result.uf}</p>
            {result.logradouro !== '' && <p>Logradouro: {result.logradouro}, 
            {result.complemento !== '' && <span> {result.complemento},</span>}
            {result.bairro !== '' && <span> bairro {result.bairro}</span>}</p>}
            {result.ddd !== '' && <p>DDD: {result.ddd}</p>}
        </div>
    )
}
