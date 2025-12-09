import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './CartSummary';
import type { CartItem } from '../types/cart';

interface LayoutProps {
	children: React.ReactNode;
	cartItems: CartItem[];
	updateQuantity: (itemId: string, quantity: number) => void;
	removeFromCart: (itemId: string) => void;
}

export default function Layout({ children, cartItems, updateQuantity, removeFromCart }: LayoutProps) {
	const totalCount = cartItems.reduce((s, c) => s + c.quantity, 0);

	return (
		<div className="App">
			<Header cartItemsCount={totalCount} />
			<main className="site-main">{children}</main>
			<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
			<Footer />
		</div>
	);
}
