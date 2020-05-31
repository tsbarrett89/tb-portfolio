import React, { useState, useEffect } from 'react'

import { NavContainer, NavContainerColumn } from '../style/navbar-styles';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const checkScroll = () => console.log(scrollPosition)

    if(scrollPosition < 300){
        return (
            <NavContainer>
                <a href='#about' onClick={checkScroll}>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
                <a href="https://dev.to/tsbarrett89">devBlog</a>
            </NavContainer>
        )} else {
            return (
                <NavContainerColumn>
                    <a href="#home">Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </NavContainerColumn>
            )
        }
}

export default Navbar