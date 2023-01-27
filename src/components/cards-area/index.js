import React from 'react';
import Cards from '../cards';

import * as C from './styles';

import { 
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

const CardsArea = ({ income, expense, total }) => {
    return (
        <C.Container>
            <Cards title='Entradas' Icon={FaRegArrowAltCircleUp} value={income} />
            <Cards title='Saídas' Icon={FaRegArrowAltCircleDown} value={expense} />
            <Cards title='Subtotal' Icon={FaDollarSign} value={total} />
        </C.Container>
    )
}

export default CardsArea;