import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import arrow from '../images/arrowLeft.png'
import { Header, BackButtonContainer, HomeContainer } from '../style/backButton-styles'

const BackButton = props => {
    let backRef = useRef(null)
    let hRef = useRef(null)
    let oRef = useRef(null)
    let mRef = useRef(null)
    let eRef = useRef(null)
    const [animation, setAnimation] = useState(null)
    const [hAnimation, setHAnimation] = useState(null)
    const [oAnimation, setOAnimation] = useState(null)
    const [mAnimation, setMAnimation] = useState(null)
    const [eAnimation, setEAnimation] = useState(null)

    useEffect(() => {
        setAnimation(gsap.from(backRef, {x:100, duration: 4, ease: 'elastic'}))
    }, [])

    useEffect(() => {
        setHAnimation(gsap.from(hRef, {opacity: 0, duration: 2}))
    }, [])
    useEffect(() => {
        setOAnimation(gsap.from(oRef, {opacity: 0, duration: 3}))
    }, [])
    useEffect(() => {
        setMAnimation(gsap.from(mRef, {opacity: 0, duration: 4}))
    }, [])
    useEffect(() => {
        setEAnimation(gsap.from(eRef, {opacity: 0, duration: 5}))
    }, [])

    const hideButton = () => props.setShowBack(false)

    return (
        <Header>
            <BackButtonContainer to='/' onClick={hideButton}>
                <img src={arrow} ref={el => backRef = el} />
                <HomeContainer>
                    <p ref={el => hRef = el}>H</p>
                    <p ref={el => oRef = el}>o</p>
                    <p ref={el => mRef = el}>m</p>
                    <p ref={el => eRef = el}>e</p>
                </HomeContainer>
            </BackButtonContainer>
        </Header>
    )
}

export default BackButton