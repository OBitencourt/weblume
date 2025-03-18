import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 30%;
`

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 8px;
    color: #D1D1D1;
    font-family: var(--font-inter);
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 250ms ease-in-out;

    &:hover {
        color: var(--cs);
    }
`

export const SpecialButton = styled.button`
    padding: 14px 20px;
    color: var(--cs);
    border: 1px solid var(--cp);
    font-family: var(--font-inter);
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: inset 0px 0px 12px var(--cp);
    cursor: pointer;
    transition: all 100ms ease-in-out;
    border-radius: 4px;

    &:hover {
        box-shadow: inset 0px 0px 24px var(--cp);
    }
` 