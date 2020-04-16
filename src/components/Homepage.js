import React from 'react';

import MePic from '../images/ciana-tom.jpg';

import { HomepageContainer, ProfilePicture } from '../style/homepage-styles';

const Homepage = () => {

    return (
        <HomepageContainer>
            <ProfilePicture><img src={MePic} alt='Thomas Barrett' /></ProfilePicture>
            
        </HomepageContainer>
    )
}

export default Homepage