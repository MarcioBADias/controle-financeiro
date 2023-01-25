import React from 'react';
import Cards from '../cards';

import * as C from './styles';

const CardsArea = () => {
    return (
        <C.Container>
            <Cards/>
            <Cards/>
            <Cards/>
        </C.Container>
    )
}

export default CardsArea;