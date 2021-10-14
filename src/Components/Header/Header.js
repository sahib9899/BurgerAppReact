import React from 'react'
import './Header.css'
import BurgerLogo from './burgerLogo.jpg'
import BurgerFont from './burgerFont.jpg'

const Header = () => {
    return (
        <React.Fragment>
        <div className='header'>
            <img className='logo' src={BurgerLogo} />
            <img className='logo' src={BurgerFont} />
            <nav className='nav-buttons'>
                <div className='burger-button active'>Burger Builder</div>
                <div className='checkout-button'>CheckOut</div>
            </nav>
        </div>
        </React.Fragment>
    )
}

export default Header;
