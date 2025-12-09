import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
