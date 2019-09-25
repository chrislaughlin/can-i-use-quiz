import React from 'react';
import styled from 'styled-components';

import {
    StyledHeading,
    StyledLink
} from "../styles";

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;  
`;

const StyledStartButton = styled.button`
    height: 70px;
    width: 170px;
    background: #3D3425;
    border: none;
    font-size: 30px;
    color: ghostwhite;
    letter-spacing: 8px;
`;

const Start = () => {
    return (
        <StyledStart>
            <StyledHeading>Can I Use - The Quiz</StyledHeading>
            <div>
                <StyledStartButton>
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
