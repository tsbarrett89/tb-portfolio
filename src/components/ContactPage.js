import React from 'react';
import linkedIcon from '../images/linkedIcon.png';
import githubIcon from '../images/githubIcon.png';

import { PageContainer, IconContainer } from '../style/app-styles';

const ContactPage = () => {

    return (
        <PageContainer>
            <h2>Thomas Barrett</h2>
            <IconContainer>
                <img src={linkedIcon} alt='LinkedIn Icon' />
                <img src={githubIcon} alt='github Icon' />
            </IconContainer>
        </PageContainer>
    )
}

export default ContactPage