import React from 'react';
import Global from './styles/global';
import Header from './components/Header';
import CardsArea from './components/cards-area';
import ResumeArea from './components/resume-area';

const App = () => {
    return (
        <>
        <Header />
        <CardsArea />
        <ResumeArea />
        <Global/>
        </>
    )
};

export default App;