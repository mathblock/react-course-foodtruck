import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import { PromoProvider } from "./context/PromoContext";

function App() {
  return (
    <CartProvider>
      <PromoProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </PromoProvider>
    </CartProvider>
  );
}

export default App;
