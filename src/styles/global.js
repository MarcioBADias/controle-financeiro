import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        border-box: box-sizing;
    }

    body{
        background-color: #333;
        color: #fff;
        font-family: 'poppins', Sans-Serif;
    }
`;

export default Global;
