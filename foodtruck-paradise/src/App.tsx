import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Menu } from './components/Menu'

function App() {

  return (
    <div className="flex flex-col justify-between">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default App
