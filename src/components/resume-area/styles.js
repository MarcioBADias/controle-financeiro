import styled from "styled-components";

export const Table = styled.table`
    background-color: #fbf2a2;
    border-radius: 10px 10px 0 0;
    color: #333;    
    height: 60vh;
    margin: 3rem auto 0;
    padding: 1rem;
    width: 87vw;
    text-align: center;

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

