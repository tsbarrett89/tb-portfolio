import styled from 'styled-components'

export const SkillsContainer = styled.div `
    width: 100%;
    background-color: #ccd5ec;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    h2 {
        font-size: 2.5rem;
        margin: 3% auto;
        width: 100%;
        text-align: center;
    }
`

export const ColumnsContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0 5% 3% 8%;

    @media(max-width: 500px){
        flex-wrap: wrap;
    }
`

export const Column = styled.div `
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-left: 3%;

    ul {
        font-size: 1.4rem;
        margin-bottom: 2%;
    }

    li {
        margin-bottom: 1.5%;
    }

    @media(max-width: 500px){
        width: 40%;
        margin-bottom: 3%;
    }
`