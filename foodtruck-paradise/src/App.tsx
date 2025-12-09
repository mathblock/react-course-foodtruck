import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
