import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    text-align: center;

    @media (max-width: 500px) {
        height: 53vh;
    }
`;

export const Header = styled.header`
    background-color: #9adcff;
`;

export const Img = styled.img`
    min-width: 100%;
    height: 100%;
    
    @media (max-width: 500px) {
        height: 60vh;
    }
`;