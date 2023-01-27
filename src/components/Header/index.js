import React from 'react';

import TitleArt from '../../assets/imgs/header-title.svg';


import * as C from './styles';

const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <C.Img src={TitleArt} alt='Arte descrevendo "Controle Financeiro"' />
            </C.Header>
        </C.Container>
    );
};

export default Header;