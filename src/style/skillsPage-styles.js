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
    }
`

export const ColumnsContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const Column = styled.div `
    width: 22%;
    display: flex;
    flex-direction: column;
`