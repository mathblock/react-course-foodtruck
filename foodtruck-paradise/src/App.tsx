import React from 'react'
import Header from './assets/components/Header'
import Menu from './assets/components/Menu'
import Footer from './assets/components/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default App
