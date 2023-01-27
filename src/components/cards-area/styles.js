import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1024px;
    margin-top: -35px;
    width: 90vw;

    @media (max-width: 500px) {
        margin-top: -50px;
    }
`;