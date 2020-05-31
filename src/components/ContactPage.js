import React from 'react';
import linkedIcon from '../images/linkedIcon.png';
import githubIcon from '../images/githubIcon.png';
import devIcon from '../images/devIcon.png';

import { PageContainer, IconContainer, Icons } from '../style/contactPage-styles';

const ContactPage = () => {

    return (
        <PageContainer id="contact">
            <h2>Thomas Barrett</h2>
            <p>tsbarrett89@gmail.com</p>
            <IconContainer>
                <Icons href='https://www.linkedin.com/in/tsbarrett89/'><img src={linkedIcon} alt='LinkedIn Icon' /></Icons>
                <Icons href='https://github.com/tsbarrett89'><img src={githubIcon} alt='github Icon' /></Icons>
                <Icons href="https://dev.to/tsbarrett89"><img src={devIcon} alt='dev.to Icon' /></Icons>
            </IconContainer>
            <p>Missoula, MT</p>
        </PageContainer>
    )
}

export default ContactPage