import styled from 'styled-components';

export const NavContainer = styled.nav `
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-bottom: 5%;
    border: 3px solid white;
    border-radius: 10px;
    background-color: #a5b3da;
    opacity: 0.8;
    
    a {
        text-decoration: none;
        color: white;
        padding: 3% 0;
        font-size: 1.8rem;
    }
`