import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButtonContainer = styled(Link) `
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    padding: 1.5% 0 0 3%;

    img {
        width: 2.5%;
    }
`