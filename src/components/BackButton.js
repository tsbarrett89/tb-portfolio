import React from 'react'

import arrow from '../images/arrowLeft.png'
import { BackButtonContainer } from '../style/backButton-styles'

const BackButton = props => {
    const hideButton = () => props.setShowBack(false)

    return (
        <BackButtonContainer onClick={hideButton}>
            <img src={arrow} />
        </BackButtonContainer>
    )
}

export default BackButton