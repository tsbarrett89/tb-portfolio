import React from 'react'
import { NavLink } from 'react-router-dom';

import { NavContainer } from '../style/navbar-styles';

const Navbar = ({ setShowBack }) => {
    const showBack = () => setShowBack(true)

    return (
        <NavContainer>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </NavContainer>
    )
}

export default Navbar