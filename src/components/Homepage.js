import React from 'react';

import MePic from '../images/ciana-tom.jpg';

import { HomepageContainer, ProfilePicture } from '../style/homepage-styles';

const Homepage = () => {

    return (
        <HomepageContainer>
            <h1>Thomas Barrett</h1>
            <ProfilePicture src={MePic} alt='Thomas Barrett' />
            
        </HomepageContainer>
    )
}

export default Homepage