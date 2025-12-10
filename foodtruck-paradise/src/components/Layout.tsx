// src/components/Layout.tsx

import { Outlet } from "react-router-dom";
import Header from './Header'; 
import Footer from './Footer'; 

const Layout = () => {
  // Extraction du cartItemsCount du contexte
  // const { cartItemsCount } = useCart(); 
  
  return (
    <>
      {/* Passage de la prop requise */}
      <Header> 
        {/* ... navigation ... */}
      </Header>
      
      <main className="content">
        <Outlet /> 
      </main>

      <Footer /> 
    </>
  );
};

export default Layout;