import styled from 'styled-components'

export const SkillsContainer = styled.div `
    width: 60%;
    background-color: #454545;
    opacity: 0.8;
    border: 3px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h2 {
        font-size: 2.5rem;
        margin: 3% auto;
    }
`

export const ColumnsContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 3%;
`

export const Column = styled.div `
    width: 22%;
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
`