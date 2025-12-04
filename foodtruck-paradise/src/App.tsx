import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="container"> 
        {}
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default App;