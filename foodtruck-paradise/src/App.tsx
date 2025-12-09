import "./App.css";
import { MenuCard } from "./assets/menuCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { menuItems } from "./data/menuData";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
