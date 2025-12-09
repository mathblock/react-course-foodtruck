import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSummary from '../components/CartSummary';
import { useCart } from '../contexts/CartContext.ts';

const Layout = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalItems } = useCart();

  return (
    <div className="app">
      <Header cartItemsCount={totalItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Outlet />
      <CartSummary cart={cart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />
      <Footer />
    </div>
  );
};

export default Layout;