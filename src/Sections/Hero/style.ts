
import styled from "styled-components";

export const MainTitle = styled.h1`
    font-size: 6rem;
    color: var(--gray);
    font-family: var(--font-jakarta);
    width: 50%;
    text-align: center;
    font-weight: 900;
    line-height: 7rem;
    margin-bottom: 24px;

    span {
        color: var(--cs);
    }
` 
export const Subtitle = styled.h3`
    font-size: 1.3rem;
    color: #D1D1D1;
    font-family: var(--font-inter);
    font-style: italic;
    font-weight: 300;
    margin-bottom: 24px;
`

export const StyledButton = styled.button`
    padding: 16px 32px ;
    color: var(--gray);
    border: 1px solid var(--gray);
    font-family: var(--font-manrope);
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: inset 0px 0px 24px var(--ct);
    cursor: pointer;
    transition: all 100ms ease-in-out;
    border-radius: 4px;

    &:hover {
        box-shadow: inset 0px 0px 36px var(--ct);
    }
`

export const NormalButton  = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: transparent;
    border: none;
    padding: 8px;
    color: var(--cs);
    font-family: var(--font-manrope);
    font-weight: 600;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 250ms ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

export const Divider = styled.div`
    height: 3px;
    width: 15%;
    background: linear-gradient(to right, #02000F, #6E44FF 50% , #02000F );
`

export const BigCircle = styled.div`
    position: absolute;
    bottom: -800px;
    width: 100%;
    height: 1000px;
    border-radius: 100%;
    background: radial-gradient(var(--ct) 1%, var(--background) 60%);
`