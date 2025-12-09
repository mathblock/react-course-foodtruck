import "./App.css";
import { MenuCard } from "./components/menuCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { menuItems } from "./data/menuData";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <HomePage />
      <Footer /> */}
      <MenuCard item={menuItems[0]} />
    </div>
  );
}

export default App;
