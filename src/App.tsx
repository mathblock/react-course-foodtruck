import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import CartSummary from './components/CartSummary'
import About from './pages/About'
import Contact from './pages/Contact'
import type { CartItem } from './types/cart'
import type { MenuItem } from './types/menu'

function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.item.id === itemId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app">
      <Header cartItemsCount={cartItemsCount} />
      <main>
        <Routes>
          <Route path="/" element={<Menu onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/cart" 
            element={
              <CartSummary 
                cart={cart} 
                onUpdateQuantity={updateQuantity} 
                onRemove={removeFromCart} 
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
