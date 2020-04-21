import styled from 'styled-components';

export const AppContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
`

export const PageContainer = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid white;
    border-radius: 10px;
    background-color: #454545;
    opacity: 0.8;
    color: white;

    h2 {
        font-size: 2.5rem;
        margin: 3% auto;
    }

    p {
        margin: 3% auto;
        font-size: 1.6rem;
    }
`

export const IconContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3% auto 8%;

    img {
        width: 5%;
        margin: 0 5%;
    }
`