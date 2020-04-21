import styled from 'styled-components'

export const PageContainer = styled.div `
    width: 30%;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 3px solid white;
    border-radius: 10px;
    background-color: #454545;
    opacity: 0.8;
    color: white;

    h2 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.4rem;
    }
`

export const IconContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Icons = styled.a `
    width: 20%;
    text-align: center;

    img {
        width: 50%;
    }
`