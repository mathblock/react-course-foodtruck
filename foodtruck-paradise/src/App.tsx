import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuList from './components/Menu1';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MenuList/>
      <Footer/>
    </div>
  );
};

export default App;