import styled from 'styled-components';

export const Container = styled.div`
    width:50%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;

    div {
        width:80%;
        height:inherit;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:150px;
        border-bottom:1px solid black;
    }

    p {
        cursor:pointer;
    }

    @media (max-width:1000px) {
        width:100%;
        
        div {
            gap:50px;
            border:none;
        }
    }
`;