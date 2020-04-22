import styled from 'styled-components'

export const ProjectsContainer = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #454545;
    opacity: 0.8;
    border: 3px solid white;
    border-radius: 10px;
    color: white;

    h2 {
        font-size: 2.5rem;
        margin: 3% auto;
    }
`

export const ProjectContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProjectName = styled.h4 `
    width: 30%;
    padding: 1.5%;
    border-right: 1px solid white;
    font-size: 1.6rem;
`

export const ProjectDescription = styled.p `
    padding-right: 2%;
    font-size: 1.2rem;
`