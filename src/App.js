import React from 'react';

import Start from './views/startView';
import QuestionView from "./views/questionView";
import {
    GameProvider,
    useGameState
} from "./context/gameContext";
import GameOverView from "./views/gameOverView";

const AppContainer = () => {
    const {
        started,
        score: {
            lives
        }
    } = useGameState();

    if (lives === 0) {
        return <GameOverView />
    }

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
