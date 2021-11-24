import { useEffect, useState } from 'react'
import * as S from './AppStyle'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'

function App() {
  const [height, setHeight] = useState(window.innerHeight - 76)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight - 76)
    })
  }, [])
  
  return (
    <div>
      <S.MainContainer height={height}>
        <Search />
      </S.MainContainer>
      <Footer />
    </div>
  )
}

export default App
