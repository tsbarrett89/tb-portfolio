import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div `
    width: 100%;
`

export const BackButtonContainer = styled(Link) `
    width: 10%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #454545;
    font-size: 1.6rem;
    padding: 1.5% 0 0 5%;

    img {
        width: 20%;
    }
`

export const HomeContainer = styled.div `
    display: flex;
    margin-left: 15px;
`