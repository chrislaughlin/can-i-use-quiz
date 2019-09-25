import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { APIs, getRandomApi } from "../utils/dataUtils";
import {
    StyledHeading,
    StyledHeading2,
    StyledLink,
    StyledList
} from "../styles";

const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
`;

const QuestionView = () => {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(getRandomApi(APIs))
    }, [])

    if (!question) {
        return null;
    }

    console.log(question);

    return (
        <StyledQuestion>
            <StyledHeading>
                {question.name}
            </StyledHeading>
            <StyledHeading2>
                {question.description}
            </StyledHeading2>
            <h3>
                <StyledLink
                    link={question.link}
                >
                    more details
                </StyledLink>
            </h3>
            <StyledList>
                {question.supported.map(browser => {
                    return (
                        <li key={browser.name}>
                            <span>
                                {browser.name}
                            </span>
                        </li>
                    )
                })}
            </StyledList>
        </StyledQuestion>
    );
};


export default QuestionView;

