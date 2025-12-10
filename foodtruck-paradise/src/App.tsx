import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import HomePage from "./pages/HomePage";
import MyAccountPage from "./pages/MyAccountPage";
import SignInPageCustom from "./pages/SignInPageCustom";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import SignUpPageCustom from "./pages/SignUpPageCustom";
import CallbackScreen from "./pages/CallbackScreen";
import AdminPage from "./pages/AdminPage";
import PromoCodesAdminPage from "./pages/PromoCodesAdminPage";
import MenuAdminPage from "./pages/MenuAdminPage";

function App() {  
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="account" element={<MyAccountPage />} />
              <Route path="sso-callback" element={<CallbackScreen  />} />
              <Route path="signin" element={<SignInPageCustom />} />
              <Route path="signup" element={<SignUpPageCustom />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<AdminPage />} />
              <Route path="promocodes" element={<PromoCodesAdminPage />} />
              <Route path="menu" element={<MenuAdminPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
