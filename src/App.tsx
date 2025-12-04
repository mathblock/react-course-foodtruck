
import './App.css'
import Footers from './composants/footer'
import Header from './composants/header'
import CategorizedMenuList from './composants/menu'

function App() {

  return (
      <div style={{
        width:"100%",
      }}>
        <Header />
        <CategorizedMenuList/>
        <Footers/>
      </div>

  )
}

export default App
