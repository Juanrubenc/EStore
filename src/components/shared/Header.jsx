import React from 'react'
import { NavLink } from 'react-router-dom'
import T from '/Users/juanruben/Documents/react2.1/ecommerce/src/assets/T.svg'

const Headers = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <a href="/" target="_blank">
                    <img src={T} className="logo-dinosaurio" alt="React logo" />
                </a>
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/login'>Login</NavLink></li>
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/purchases'>Purchases</NavLink></li>
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/cart'>Cart</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers