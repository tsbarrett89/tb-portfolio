import React from 'react'

import arrow from '../images/arrowLeft.svg'
import { BackButtonContainer } from '../style/backButton-styles'

const BackButton = () => {
    return (
        <BackButtonContainer>
            <img src={arrow} />
        </BackButtonContainer>
    )
}

export default BackButton