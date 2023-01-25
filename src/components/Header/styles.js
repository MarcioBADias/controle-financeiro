import styled from 'styled-components';

import BackgroundTitle from '../../assets/imgs/header-bg.svg';

export const Container = styled.div`
    height: 40vh;
    text-align: center;

    @media (max-width: 500px) {
        height: 30vh;
    }
`;

export const Header = styled.header`
    background-image: url(${BackgroundTitle});
    background-color: #9adcff;
    height: 100%;
`;

export const Img = styled.img`
    height: 80%;
    
    @media (max-width: 500px) {
        height: 65%;
    }
`;