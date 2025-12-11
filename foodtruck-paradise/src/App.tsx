import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MyAccountPage from "./pages/MyAccountPage";
import SignInPageCustom from "./pages/SignInPageCustom";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import SignUpPageCustom from "./pages/SignUpPageCustom";
import CallbackScreen from "./pages/CallbackScreen";
import OrderTrackingPage from "./pages/OrderTrackingPage";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tracking" element={<OrderTrackingPage />} />
        <Route path="/tracking/:orderId" element={<OrderTrackingPage />} />
        
        <Route path="/*" element={
          <AuthProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="account" element={<MyAccountPage />} />
                  <Route path="sso-callback" element={<CallbackScreen  />} />
                  <Route path="signin" element={<SignInPageCustom />} />
                  <Route path="signup" element={<SignUpPageCustom />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </CartProvider>
          </AuthProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
