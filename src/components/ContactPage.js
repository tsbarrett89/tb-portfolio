import React from 'react';
import linkedIcon from '../images/linkedIcon.png';
import githubIcon from '../images/githubIcon.png';

import { PageContainer, IconContainer } from '../style/contactPage-styles';

const ContactPage = () => {

    return (
        <PageContainer>
            <h2>Thomas Barrett</h2>
            <p>tsbarrett89@gmail.com</p>
            <IconContainer>
                <img src={linkedIcon} alt='LinkedIn Icon' />
                <img src={githubIcon} alt='github Icon' />
            </IconContainer>
            <p>Missoula, MT</p>
        </PageContainer>
    )
}

export default ContactPage