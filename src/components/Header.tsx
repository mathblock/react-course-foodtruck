
import React from 'react'
import './Header.css'




const Header:React.FC = function(){

    return (
        <header className='header'>
            <div className="container">
                {/* Logo = titre  */}
                <div className="logo">🌮 Food Truck Paradise </div>

                {/* Slogan  */}

                <div className="tagline">
                     Des saveurs uniques, servies avec amour !
                </div>

                <nav className='nav'>
                    <a href="#" className='nav-link'>Menu</a>
                    <a href="#" className='nav-link'>A propos</a>
                    <a href="#" className='nav-link'>Contact</a>
                </nav>
            </div>

        </header>
    )

} 

export default Header 