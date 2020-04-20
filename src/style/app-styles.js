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
    border: 2px solid white;
    border-radius: 10px;
    background-color: #454545;
    opacity: 0.8;
    
    img {
        color: white;
    }
`