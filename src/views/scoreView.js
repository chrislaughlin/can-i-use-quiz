import React from 'react';
import styled from "styled-components";

import {
    useGameState
} from "../context/gameContext";

const StyledScoreView = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    right: 20px;
    text-transform: uppercase;
    font-weight: 500;
    background: #00000078;
    padding: 5px;
`;

const ScoreView = () => {
    const { score: { points, lives} } = useGameState();

    return (
        <StyledScoreView>
            <span>{points} points</span>
            <span>{lives} lives</span>
        </StyledScoreView>
    );
};


export default ScoreView;

