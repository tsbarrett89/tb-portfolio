import styled from 'styled-components'

export const AboutContainer = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #454545;
    opacity: 0.8;
    color: white;
    border: 3px solid white;
    border-radius: 10px;

    h2 {
        font-size: 2.2rem;
        margin: 3% auto;
    }
    
    p {
        font-size: 1.2rem;
        text-indent: 40px;
        margin-bottom: 2%;
        padding: 0 3%;
    }
`