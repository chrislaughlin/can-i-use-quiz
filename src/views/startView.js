import React from 'react';
import styled from 'styled-components';

const StyledStart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;  
`;

const StyledHeading = styled.h1`
    color: #3D3425;
    font-size: 40px;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px ghostwhite;
    text-align: center;
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

const StyledLink = styled.a.attrs({
    href: 'https://caniuse.com/',
    target: '_blank',
    rel: 'noopener noreferrer'
})`
    padding-left: 5px;
    color: #3d3325;
    font-weight: bolder;
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
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
                Data sourced from <StyledLink>Can I Use</StyledLink>
            </span>
        </StyledStart>
    );
}

export default Start;
