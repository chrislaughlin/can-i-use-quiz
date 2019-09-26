import React, { createContext, useReducer, useContext } from 'react';

import { APIs, getRandomApi } from "../utils/dataUtils";

const GameContext = createContext();
const GameDispatchContext = createContext();

const DEFAULT_STATE = {
    started: false,
    score: {
        points: 0,
        lives: 10
    },
    question: getRandomApi(APIs)
}

const REDUCER_TYPES = {
    'START_GAME': 'startGame',
    'UPDATE_SCORE': 'updateScore',
    'SET_QUESTION': 'setQuestion',
    'REMOVE_LIFE': 'removeLife'
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case REDUCER_TYPES.START_GAME:
            return {
                ...DEFAULT_STATE,
                started: true,
            };
        case REDUCER_TYPES.UPDATE_SCORE:
            return {
                ...state,
                score: {
                    ...state.score,
                    points: state.score.points + 10
                },
            };
        case REDUCER_TYPES.REMOVE_LIFE:
            return {
                ...state,
                score: {
                    ...state.score,
                    lives: state.score.lives - 1
                },
            };
        case REDUCER_TYPES.SET_QUESTION:
            return {
                ...state,
                question: getRandomApi(APIs)
            };
    }
}

const GameProvider = ({ children }) => {
    const [state, setState] = useReducer(gameReducer, DEFAULT_STATE);

    return (
        <GameContext.Provider value={state}>
            <GameDispatchContext.Provider value={setState}>
                {children}
            </GameDispatchContext.Provider>
        </GameContext.Provider>
    );
};

const useGameState = () => {
    const context = useContext(GameContext);

    return context;
};

const useGameDispatch = () => {
    const context = useContext(GameDispatchContext);

    return context;
};

export {
    GameProvider,
    useGameState,
    useGameDispatch,
    REDUCER_TYPES
};

