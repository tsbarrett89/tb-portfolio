import React from 'react';

import { SkillsContainer, ColumnsContainer, Column } from '../style/skillsPage-styles'

const SkillsPage = () => {

    return (
        <SkillsContainer id="skills">
            <h2>Skills and Experience</h2>
            <ColumnsContainer>
                <Column>
                    <ul>Languages</ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                </Column>
                <Column>
                    <ul>Libraries</ul>
                        <li>npm</li>
                        <li>yarn</li>
                        <li>React</li>
                        <li>Node.js</li>
                </Column>
                <Column>
                    <ul>Frameworks</ul>
                        <li>Less</li>
                        <li>Material UI</li>
                        <li>Reactstrap</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>Knex</li>
                </Column>
                <Column>
                    <ul>Team Platforms</ul>
                        <li>Git/Github</li>
                        <li>Slack</li>
                        <li>Zoom</li>
                        <li>Trello</li>
                        <li>Agile</li>
                </Column>
            </ColumnsContainer>
        </SkillsContainer>
    )
}

export default SkillsPage