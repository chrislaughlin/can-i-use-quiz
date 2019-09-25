import React from 'react';

import Start from './views/startView';
import QuestionView from "./views/questionView";
import {
    GameProvider,
    useGameState
} from "./context/gameContext";

const AppContainer = () => {
    const { started } = useGameState();
    if (started) {
        return <QuestionView/>;
    } else {
        return <Start/>;
    }
}

function App() {

    return (
        <GameProvider>
            <AppContainer/>
        </GameProvider>
    );
}

export default App;
