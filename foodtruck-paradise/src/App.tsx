import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import MenuList from "./components/Menu1";
import CategoryPage from "./pages/categoryPage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element= {<MenuList/>}></Route>
        <Route path="/menu/category/:categoryName" element={<MenuList />} />
        {/* <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}