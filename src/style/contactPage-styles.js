import styled from 'styled-components'

export const PageContainer = styled.div `
    width: 100%;
    background-color: #68697d;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 0.8;
    color: white;
    margin: 4%;

    h2 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.4rem;
    }
`

export const IconContainer = styled.div `
    width: 50%;
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