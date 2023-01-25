import React from 'react';
import Global from './styles/global';
import Header from './components/Header';
import CardsArea from './components/cards-area';
import Form from './components/form';
import ResumeArea from './components/resume-area';

const App = () => {
    return (
        <>
        <Header />
        <CardsArea />
        <Form />
        <ResumeArea />
        <Global/>
        </>
    )
};

export default App;