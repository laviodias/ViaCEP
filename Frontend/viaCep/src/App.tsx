import { useState } from 'react'
import * as S from './AppStyle'
import background from './assets/background.jpg'

function App() {
  const [data, setData] = useState(undefined)
  const [cep, setCep] = useState('')

  async function getCep(cep: string) {
    const response = await fetch(/* `/api/${cep}` */`https://viacep.com.br/ws/${cep}/json/`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }

  return (
    <S.MainContainer imgBack={background}>
      <div>
        <p>Informe o CEP: </p>
        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
        <button onClick={() => {
          getCep(cep).then(data => {
            setData(data)
          })
        }}>Pesquisar</button>
      </div>
      <div>
        <p>Resultado:</p>
        {data === undefined ? <p>Nenhum resultado</p> : <p>{JSON.stringify(data)}</p>}
      </div>
    </S.MainContainer>
  )
}

export default App
