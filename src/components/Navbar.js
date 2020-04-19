import React from 'react'
import { NavLink } from 'react-router-dom';

import { NavContainer } from '../style/navbar-styles';

const Navbar = ({ setShowBack }) => {
    const showBack = () => setShowBack(true)

    return (
        <NavContainer>
            <NavLink to='/about' onClick={showBack}>About</NavLink>
            <NavLink to='/skills' onClick={showBack}>Skills</NavLink>
            <NavLink to='/projects' onClick={showBack}>Projects</NavLink>
            <NavLink to='/contact' onClick={showBack}>Contact</NavLink>
        </NavContainer>
    )
}

export default Navbar