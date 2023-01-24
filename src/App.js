import React from 'react';
import Global from './styles/global';
import Header from './components/Header';

const App = () => {
    return (
        <>
        <Header />
        <div>Meu APP de controle financeiro</div>;
        <Global/>
        </>
    )
};

export default App;