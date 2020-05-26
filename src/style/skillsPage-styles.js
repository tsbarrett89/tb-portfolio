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
    }
`

export const ColumnsContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0 5% 3% 8%;
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
`