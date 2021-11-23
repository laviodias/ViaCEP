import * as S from './AppStyle'
import background from './assets/background.jpg'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'

function App() {
  
  return (
    <S.MainContainer imgBack={background}>
      <Search />
      <Footer />
    </S.MainContainer>
  )
}

export default App
