import styled from 'styled-components';

export const Section1 = styled.div`
    background-image:url("./src/assets/background.png");
    background-position:center;
    background-size:cover;
    display:flex;

    @media (max-width:1000px) {
        flex-direction:column;
    }
`;