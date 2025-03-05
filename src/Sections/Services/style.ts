import styled from "styled-components";

export const Title = styled.h1`
    color: var(--cs);
    font-size: 3rem;
    font-family: var(--font-almarai);
    font-weight: 800;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 100px;
    z-index: 2;
`;


export const Content = styled.div`
    width: 90%;
    background: rgba(241, 241, 241, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 18px;
    padding: 30px;
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 18px;
        padding: 1px; /* Espessura da borda */
        background: linear-gradient(to right, #1E1E1E, #cccccc);
        -webkit-mask: 
            linear-gradient(#f1f1f1 0 0) content-box, 
            linear-gradient(#f1f1f1 0 0);
        mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        pointer-events: none;
    }

    display: flex;
    justify-content: space-between;
`;

export const ServiceBox = styled.div`
    width: 32%;
    height: 400px;
    position: relative;
    padding: 34px;
    border-radius: 9px;
    border: 1px solid var(--cp);
    background-color: #24125A;
    box-shadow: inset 0px 0px 45px var(--ct);
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        font-family: var(--font-manrope);
        font-size: 2rem;
        font-weight: 300;
        color: white;
        margin-bottom: 12px;
    }

    p {
        font-size: 1.7rem;
        font-weight: 300;
        font-family: var(--font-manrope);
        color: var(--cq);
        margin-top: 20px;
    }
`

export const Divider = styled.div`
    height: 2px;
    width: 70%;
    background: linear-gradient(to right, #24125A, #6E44FF 50% , #24125A );
`
