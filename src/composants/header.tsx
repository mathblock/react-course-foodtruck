import '../styles/header.css';
import CartBadge from './cartBadge';

const Header = ({cartItemCount}:{cartItemCount:number}) =>{
    return (
        <div className='header-container'>
            <div className="header-left">
                <img src="https://cdn.pixabay.com/photo/2021/10/05/12/01/pizza-6682514_1280.png" alt="Logo FoodTruck Paradise" className="logo" />
                <h1 className="title">FoodTruck Paradise</h1>
            </div>
            <div className="nav-links">
                <a href="#menu">Menu</a>
                <a href="#about">À propos</a>
                <a href="#contact">Contact</a>
                <CartBadge cartItemCount={cartItemCount} />
            </div>
            
        </div>
    )
}

export default Header;