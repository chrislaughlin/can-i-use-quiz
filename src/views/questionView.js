import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { APIs, getRandomApi } from "../utils/dataUtils";
import {
    StyledHeading,
    StyledHeading2,
    StyledLink,
    StyledList,
    StyledListItem
} from "../styles";

const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
`;

const StyledRules = styled.span`
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
`;

const getSelected = (curr, list) => list.find(item => item.name === curr);

const QuestionView = () => {
    const [question, setQuestion] = useState(null);
    const [selectedList, setSelectedList] = useState([]);

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
                <StyledRules>
                    Select which browsers support this API on their latest version
                </StyledRules>
                <StyledLink
                    link={question.link}
                >
                    more details
                </StyledLink>
            </h3>
            <StyledList>
                {question.supported.map(browser => {
                    const isSelected = getSelected(browser.name, selectedList);

                    return (
                        <StyledListItem
                            key={browser.name}
                            onClick={() => setSelectedList(curr => [...curr, browser])}
                            selected={isSelected !== undefined}
                            valid={isSelected && isSelected.supportsLatest}
                        >
                            <span>
                                {browser.name}
                            </span>
                        </StyledListItem>
                    )
                })}
            </StyledList>
        </StyledQuestion>
    );
};


export default QuestionView;

