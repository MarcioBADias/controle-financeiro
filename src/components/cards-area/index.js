import React from 'react';
import Cards from '../cards';

import * as C from './styles';

import { 
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

const CardsArea = () => {
    return (
        <C.Container>
            <Cards title='Entradas' Icon={FaRegArrowAltCircleUp} value='1000'/>
            <Cards title='Saídas' Icon={FaRegArrowAltCircleDown} value='1000'/>
            <Cards title='Subtotal' Icon={FaDollarSign} value='1000'/>
        </C.Container>
    )
}

export default CardsArea;