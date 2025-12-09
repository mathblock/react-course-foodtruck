import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
=======
import CartPage from "./pages/CartPage";
>>>>>>> b3d0ffe900c8394fc82236db69c1aa02836600eb
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
<<<<<<< HEAD
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
=======
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Fallback or Menu route if needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
>>>>>>> b3d0ffe900c8394fc82236db69c1aa02836600eb
    </CartProvider>
  );
}

export default App;
