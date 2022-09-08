import React from 'react'
import { NavLink } from 'react-router-dom'


const Headers = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <a href="/" target="_blank">
                    <h1>E-Store</h1>
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