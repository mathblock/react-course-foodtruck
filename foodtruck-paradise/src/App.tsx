import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "menu">("home");

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} />
      {currentPage === "home" ? <HomePage /> : <MenuPage />}
      <Footer />
    </div>
  );
}

export default App;
