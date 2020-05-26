import styled from 'styled-components';

export const NavContainer = styled.nav `
    position: fixed;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 5%;
    z-index: 1;

    a {
        text-decoration: none;
        color: white;
        padding: 3% 0;
        font-size: 0.8rem;
        margin-right: 2%;
    }
`

export const NavContainerColumn = styled.nav `
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 3%;

    a {
        text-decoration: none;
        color: white;
        font-size: 0.8rem;
        margin-top: 2%;
    }
`