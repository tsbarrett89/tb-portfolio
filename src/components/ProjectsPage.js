import React from 'react'
import githubIcon from '../images/githubIcon.png'

import { ProjectsContainer, ProjectContainer, ProjectName, ProjectDescription } from '../style/projectsPage-styles'

const ProjectsPage = () => {

    return (
        <ProjectsContainer id="projects">
            <h2>Projects</h2>
            <ProjectContainer>
                <ProjectName href='https://save-the-animals-site.netlify.app/'><h4>Save the Animals</h4></ProjectName>
                <ProjectDescription>This was my last build week project. I was the back-end engineer and Project Lead for a team of 4 students. I liked the project enough that I built out my own front end with React and expanded on the features. The site linked is entirely my work. Tech stack - Node.js with Express, React, Reactstrap, Styled-Components. 
                    <a href="https://github.com/tsbarrett89/save-the-animals-front-end"> Front end github repo</a> 
                    <a href="https://github.com/BW-SaveTheAnimalsTeam3/back-end"> Back end github repo</a>
                </ProjectDescription>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectName href='https://spell-list-creator.netlify.app/'><h4>Spell List Generator</h4></ProjectName>
                <ProjectDescription>Created this simple site to help my D&D players to quickly create a daily spell list. One can search the basic spells and choose them to add to the Spell Sheet. The D&D 5e API is used until I can create a back-end that will contain all spells. Tech stack - React with Redux, Styled Components
                    <a href="https://github.com/tsbarrett89/dnd-spell-list"> github repo</a>
                </ProjectDescription>
            </ProjectContainer>
        </ProjectsContainer>
    )
}

export default ProjectsPage