import * as S from './AppStyle'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Header from './components/Header/Header'

function App() {
  
  return (
    <S.MainContainer>
      {/* <Header /> */}
      <Search />
      <Footer />
    </S.MainContainer>
  )
}

export default App
