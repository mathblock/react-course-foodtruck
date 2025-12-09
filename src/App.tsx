import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import { useEffect, useState } from "react";
import type { CartItem } from "./types/cart";
import type { MenuItem } from "./types/menu";
import CartSummary from "./components/CartSummary";
import type { RouteApp } from "./types/utils";
import Layout from "./components/Layout";
import NotFoundPage from "./NotFoundPage";
import CategoryPage from "./components/CategoryPage";

function App() {
  const [carts, setCarts] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("carts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  function addToCart(item: MenuItem) {
    //ajoute un item ou augmente sa quantité
    setCarts((prevCart: CartItem[]) => {
      const existingItem: CartItem | undefined = prevCart.find(
        (cartItem) => cartItem.item.id === item.id
      );
      if (existingItem) {
        return prevCart.map((cartItem: CartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        const newCartItem: CartItem = { item, quantity: 1 };
        return [...prevCart, newCartItem];
      }
    });
  }

  function removeFromCart(itemId: number) {
    //supprime complètement un item
    setCarts((prevCart: CartItem[]) =>
      prevCart.filter((cartItem) => cartItem.item.id !== itemId)
    );
  }

  function updateQuantity(itemId: number, quantity: number) {
    //modifie la quantité (supprime si ≤ 0)
    setCarts((prevCart: CartItem[]) =>
      prevCart
        .map((cartItem: CartItem) =>
          cartItem.item.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
        .filter((cartItem: CartItem) => cartItem.quantity > 0)
    );
  }

  const routeApp: RouteApp[] = [
    {
      chemin: "",
      element: (
        <main>
          <Menu onAddToCart={addToCart} />
        </main>
      ),
      ind: true,
    },
    {
      chemin: "/about",
      element: (
        <main>
          <About />
        </main>
      ),
    },
    {
      chemin: "/contact",
      element: (
        <main>
          <ContactPage />
        </main>
      ),
    },
    {
      chemin: "/cart",
      element: (
        <main>
          <CartSummary
            carts={carts}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        </main>
      ),
    },
    {
      chemin: "*",
      element: (
        <main>
          <NotFoundPage />
        </main>
      ),
    },
    {
      chemin: "/menu/category/:categoryName",
      element: (
        <main>
          <CategoryPage />
        </main>
      ),
    },
  ];

  return (
    <div>
      <Header
        cartItemCount={carts.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeApp.map((route) => (
            <Route
              index={route.ind}
              key={route.chemin}
              path={route.chemin}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
