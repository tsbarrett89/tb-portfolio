import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import arrow from '../images/arrowLeft.png'
import { BackButtonContainer } from '../style/backButton-styles'

const BackButton = props => {
    let backRef = useRef(null)
    let homeRef = useRef(null)
    const [animation, setAnimation] = useState(null)
    const [homeAnimation, setHomeAnimation] = useState(null)

    useEffect(() => {
        setAnimation(gsap.from(backRef, {x:100, duration: 4, ease: 'elastic'}))
    }, [])

    useEffect(() => {
        setHomeAnimation(gsap.from(homeRef, {opacity: 0, x: 100, duration: 4, ease: 'elastic'}))
    }, [])

    const hideButton = () => props.setShowBack(false)

    return (
        <BackButtonContainer to='/' onClick={hideButton}>
            <img src={arrow} ref={el => backRef = el} />
            <p ref={el => homeRef = el}>Home</p>
        </BackButtonContainer>
    )
}

export default BackButton