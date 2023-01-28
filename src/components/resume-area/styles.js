import styled from "styled-components";

export const Table = styled.table`
    background-color: #fbf2a2;
    border-radius: 10px 10px 0 0;
    color: #333;
    margin: 3rem auto;
    margin-botton: 0;
    min-height: 200px;
    padding: 1rem;
    max-width: 1024px;
    text-align: center;
    width: 90vw;

`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    border-botton: inset;
    padding-botton: 5px;
    text-align: ${props => (props.alignCenter ? 'center' : 'start')};
    width: ${props => (props.width? props.width + '%' : 'auto')};
`;

