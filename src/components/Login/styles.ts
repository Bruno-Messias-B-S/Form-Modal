import styled from 'styled-components';

export const Container = styled.div`
    width:50%;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.7);
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);

    div {
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    button {
        color:white;
        font-size:27px;
        border:1px solid white;
        padding:15px 40px;
        border-radius:8px;
        cursor:pointer;
        background-color:transparent;
    }

    @media (max-width:1000px) {
        width:100%;
        height:calc(100vh - 50px);
        clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%);
    }
`;

export const Modal = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;