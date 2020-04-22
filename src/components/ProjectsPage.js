import React from 'react'

import { ProjectsContainer, ProjectContainer, ProjectName, ProjectDescription } from '../style/projectsPage-styles'

const ProjectsPage = () => {

    return (
        <ProjectsContainer>
            <h2>Projects</h2>
            <ProjectContainer>
                <ProjectName>Save the Animals</ProjectName>
                <ProjectDescription>This was my last build week project. I was the back-end engineer and Project Lead for a team of 4 students. I liked the project enough that I built out my own front end with React and expanded on the features. The site linked is entirely my work. Tech stack - Node.js with Express, React, Reactstrap, Styled-Components.</ProjectDescription>
            </ProjectContainer>
        </ProjectsContainer>
    )
}

export default ProjectsPage