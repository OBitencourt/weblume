import styled from "styled-components";

export const Title = styled.h2`
    font-family: var(--font-manrope);
    color: var(--cs);
    font-size: 2.2rem;
    font-weight: 300;
    text-align: center;
    margin-top: 4rem;
`

export const Content = styled.div`
    width: 90%;
    border: 2px solid var(--cp);
    box-shadow: inset 0px 0px 8px var(--cp);
    padding: 48px 124px;
    background-color: var(--background);
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const Tool = styled.div`
    font-family: var(--font-manrope);
    font-size: 2rem;
    color: var(--cs);
    padding: 8px 32px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`


export const Divider = styled.div`
    height: auto;
    width: 2px;
    background: linear-gradient(to bottom, #030014, #6E44FF 50% , #030014 );
`
