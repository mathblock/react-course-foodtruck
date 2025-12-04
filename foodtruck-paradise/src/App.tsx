import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;

