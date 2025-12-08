interface HeaderProps {
    onNavClick: (page: string) => void;
    cartItemsCount: number;
    favoritesCount: number;
}

const Header = ({ onNavClick, cartItemsCount, favoritesCount }: HeaderProps) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">🌮 Food Truck Paradise</div>
                <p className="tagline">Les meilleurs plats de rue en ville !</p>
                <nav className="nav">
                    <button onClick={() => onNavClick('menu')} className="nav-link">Menu</button>
                    <button onClick={() => onNavClick('about')} className="nav-link">À propos</button>
                    <button onClick={() => onNavClick('contact')} className="nav-link">Contact</button>
                    <button className="nav-link" onClick={() => onNavClick('favorites')}>
                        ❤️ Favoris ({favoritesCount})
                    </button>
                    <button className="cart-button" onClick={() => onNavClick('cart')}>
                        Panier ({cartItemsCount})
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;