// src/App.tsx

import { Routes, Route } from "react-router-dom"; // 👈 1. Import des outils de routage

// Importez les Context Providers
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

// Importez vos composants/pages
import Layout from "./components/Layout";        // 👈 Le composant de structure
import OrderHistory from "./pages/OrderHistory"; // Page /orders

import "./App.css"; // Styles généraux
import HomePage from "./pages/HomePage";

function App() {
  return (
    // 2. Les Context Providers enveloppent tout le routage
    <CartProvider>
      <OrderProvider>
        <div className="app">
          {/* 3. Définition des Routes */}
          <Routes>
            {/* 4. Route Parent (Layout) : Structure commune à toutes les pages */}
            <Route path="/" element={<Layout />}>
              
              {/* Route Enfant : Le composant à afficher dans l'Outlet du Layout */}
              
              {/* Page d'Accueil */}
              <Route index element={<HomePage/>} /> 
              {/* L'attribut 'index' rend Menu sur le chemin du parent : "/" */}

              {/* Pages Statiques */}
              
              {/* Pages Team 4 (Commandes) */}
              <Route path="/orders" element={<OrderHistory />} />
              
              {/* Page 404 (Optionnel, à la fin) */}
              <Route path="*" element={<div>Page 404 non trouvée</div>} />
            </Route>
          </Routes>
        </div>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;