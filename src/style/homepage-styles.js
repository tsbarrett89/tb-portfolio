import styled from 'styled-components';

export const HomepageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfilePicture = styled.div `
    width: 30%;
    
    img{
        border: 1px solid black;
        border-radius: 50%;
        transform: rotate(-25deg);
    }
    
`