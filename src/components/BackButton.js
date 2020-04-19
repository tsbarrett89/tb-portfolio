import React from 'react'

import arrow from '../images/arrowLeft.png'
import { BackButtonContainer } from '../style/backButton-styles'

const BackButton = props => {
    const hideButton = () => props.setShowBack(false)

    return (
        <BackButtonContainer to='/' onClick={hideButton}>
            <img src={arrow} />
            <p>Home</p>
        </BackButtonContainer>
    )
}

export default BackButton