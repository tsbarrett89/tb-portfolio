import React from 'react';
import linkedIcon from '../images/linkedIcon.png';
import githubIcon from '../images/githubIcon.png';

import { PageContainer } from '../style/app-styles';

const ContactPage = () => {

    return (
        <PageContainer>
            <h2>Thomas Barrett</h2>
            <div>
                <img src={linkedIcon} alt='LinkedIn Icon' />
                <img src={githubIcon} alt='github Icon' />
            </div>
        </PageContainer>
    )
}

export default ContactPage