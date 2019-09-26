import React from 'react';
import styled from 'styled-components';

import {
    StyledHeading,
    StyledLink, StyledStartButton
} from "../styles";

import {
    useGameDispatch,
    REDUCER_TYPES
} from "../context/gameContext";

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;  
`;

const Start = () => {
    const dispatch = useGameDispatch();

    return (
        <StyledStart>
            <StyledHeading>Can I Use - The Quiz</StyledHeading>
            <div>
                <StyledStartButton
                    onClick={() => dispatch({type: REDUCER_TYPES.START_GAME})}
                >
                    START
                </StyledStartButton>
            </div>
            <span>
                Data sourced from
                <StyledLink link="https://caniuse.com/">Can I Use</StyledLink>
            </span>
        </StyledStart>
    );
}

export default Start;
