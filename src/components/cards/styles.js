import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background: #fff;
    border-radius: 5px;
    Color: #333;
    display: flex;
    flex-direction: column;
    min-height: 90px;
    padding: 1rem 2rem;
    width: 30%;

    @media (max-width: 750px) {
        width: 20%;

        p{
            fonst-size: 12px;
        }

        span{
            fonst-size:20px;
        }

        svg{
            display: none;
        }
    }
`;

export const Header = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-around;
    width: 100%

    svg{
        height:25px;
        width:25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size:20px;
`;

export const Total = styled.span`
    font-size: 30px;
    fonst-weigth: bold;
`;