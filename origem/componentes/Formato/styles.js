import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    margin: 2rem auto;
    width: 90vw;
    color: #333;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: .5rem 0;
    gap: 10px;

    @media (max-width: 500px) {
        display:grid;
    }
`;

export const ImputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #5da9d1;
    transition: background-color 0.3s ease;

    button:active {
      background-color: #9ADCFF;
      transition: background-color 0.3s ease;
}

`;
