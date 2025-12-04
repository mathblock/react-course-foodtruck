
function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <div className="logo">
                     Food Truck Paradise
                </div>
                <div className="tagline">
                    Le meilleur de la street food à votre portée !
                </div>
                <nav className="nav">
                    <a href="#menu" className="nav-link">Menu</a>
                    <a href="#about" className="nav-link">À propos</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
