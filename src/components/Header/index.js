import React from 'react';

import Background from '../../assets/imgs/header-arte.svg';


import * as C from './styles';

const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <C.Img src={Background} alt='background "Controle Financeiro"' />
            </C.Header>
        </C.Container>
    );
};

export default Header;