import styled from 'styled-components';

export const HomepageContainer = styled.div `
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 4%;

    h1 {
        font-size: 4rem;
    }

    h3 {
        font-size: 2rem;
        margin-top: 20%;
    }

    p {
        font-size: 1.6rem;
        margin-top: 10%;
    }

    @media(max-width: 500px) {
        width: 80%;
        text-align: center;
    }
`