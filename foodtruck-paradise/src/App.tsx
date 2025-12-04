import "./App.css";
import Header from "./composants/Header";
import Menu from "./composants/Menu";
import Footer from "./composants/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Menu />
      </main>

      <Footer />
    </div>
  );
}

export default App;

