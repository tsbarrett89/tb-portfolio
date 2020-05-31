import styled from 'styled-components'

export const ProjectsContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #454545;
    opacity: 0.8;
    color: white;

    h2 {
        font-size: 2.5rem;
        margin: 3% auto;
    }

    @media(max-width: 500px){
        h2{
            margin: 6% auto;
        }
    }
`

export const ProjectContainer = styled.div `
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2%;

    @media(max-width: 500px){
        flex-direction: column;
        margin-bottom: 4%;
    }
`

export const ProjectName = styled.a `
    width: 25%;
    padding: 2%;
    border-right: 1px solid white;
    text-decoration: none;
    color: white;

    

    h4 {
        font-size: 1.6rem;

        &:hover {
        transform: scale(1.1);
        padding-left: 3.5%;
        }
    }

    @media(max-width: 500px){
        width: 75%;
        border-right: none;
        border-bottom: 1px solid white;
        margin-bottom: 3%;
        text-align: center;
    }
`

export const ProjectDescription = styled.p `
    width: 65%;
    padding-right: 2%;
    font-size: 1.2rem;

    @media(max-width: 500px){
        width: 90%;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #ccd5ec;
    }
`