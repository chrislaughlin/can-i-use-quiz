import React, { Fragment } from 'react';
import {StyledHeading, StyledStartButton} from "../styles";
import {
    REDUCER_TYPES,
    useGameDispatch,
    useGameState
} from "../context/gameContext";
import styled from "styled-components";

const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;  
`;

const GameOverView = () => {
    const {
        score: {
            points
        }
    } = useGameState();
    const dispatch = useGameDispatch();

    return (
        <StyledGameOver>
            <StyledHeading>
                game over!!!! score: {points}
            </StyledHeading>
            <StyledStartButton
                onClick={() => dispatch({type: REDUCER_TYPES.START_GAME})}
            >
                START
            </StyledStartButton>
        </StyledGameOver>
    )
};

export default GameOverView;
