import React, { useState } from "react";
import ResumeArea from "../resume-area";

import * as C from './styles';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setExpense] = useState(false);

    const generateID = value => Math.round(Math.random()*value);

    const handleSave = () => {
        if (!desc || !amount){
            alert('Informe a descrição e o valor');
            return;
        } else if (amount < 1) {
            alert('O valor tem que ser positivo!');
            return;
        };
        
        const transaction = {
            id: generateID(1000),
            desc: desc,
            amount: amount,
            expense: isExpense
        };
        
        handleAdd(transaction);
        
        setDesc('');
        setAmount('');
    };

    return (
        <>
            <C.Container>
                <C.ImputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.ImputContent>
                <C.ImputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)} />
                </C.ImputContent>
                <C.RadioGroup>
                    <C.Input type='radio' id='rIncome' defaultChecked name='group1' onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor='rIncome'>Entrada</C.Label>
                    <C.Input type='radio' id='rExpenses' name='group1' onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor='rExpenses'>Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
            <ResumeArea itens={transactionsList} setItens={setTransactionsList} />
        </>
    )
}

export default Form;