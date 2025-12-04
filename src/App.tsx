
import './App.css'
import Footer from './composants/footer'
import Header from './composants/header'
import CategorizedMenuList from './composants/menu'

function App() {

  return (
      <div style={{
        width:"100%",
      }}>
        <Header />
        <CategorizedMenuList/>
        <Footer/>
      </div>

  )
}

export default App
