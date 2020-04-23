import React from 'react';

import { SkillsContainer, ColumnsContainer, Column } from '../style/skillsPage-styles'

const SkillsPage = () => {

    return (
        <SkillsContainer>
            <h2>Skills and Experience</h2>
            <ColumnsContainer>
                <Column>
                    <h4>Languages</h4>
                </Column>
                <Column>
                    <h4>Libraries</h4>
                </Column>
                <Column>
                    <h4>Frameworks</h4>
                </Column>
                <Column>
                    <h4>Team Platforms</h4>
                </Column>
            </ColumnsContainer>
        </SkillsContainer>
    )
}

export default SkillsPage