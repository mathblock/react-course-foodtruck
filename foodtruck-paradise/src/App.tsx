import "./App.css"
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Layout } from "./pages/layout";
import MenuPage from "./pages/MenuPage";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
      
        <Routes >
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
  );
}

export default App;
