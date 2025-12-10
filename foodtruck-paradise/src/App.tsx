import "./App.css";
import { MenuCard } from "./components/menuCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FavoritesPage from "./pages/Favorites";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
       {/* <Header />
      <HomePage />
      <Footer /> */}
      <FavoritesPage />
    </div>
  );
}

export default App;
