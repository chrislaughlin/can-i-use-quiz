import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
    StyledHeading,
    StyledHeading2,
    StyledLink,
    StyledList,
    StyledListItem,
    StyledNextButton
} from "../styles";
import ScoreView from "./scoreView";
import {useGameDispatch, REDUCER_TYPES, useGameState} from "../context/gameContext";

const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
    max-width: 100vw;
    padding-left: 5px;
    padding-right: ;: 5px;
`;

const StyledRules = styled.span`
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
`;

const getSelected = (curr, list) => list.find(item => item.name === curr);

const QuestionView = () => {
    const [selectedList, setSelectedList] = useState([]);
    const dispatch = useGameDispatch();
    const { question } = useGameState();

    useEffect(() => {
        setSelectedList([])
    }, [question])

    // if (!question) {
    //     return null;
    // }

    return (
        <StyledQuestion>
            <ScoreView/>
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
                            onClick={() => {
                                setSelectedList(curr => [...curr, browser])
                                if (getSelected(browser.name, question.supported).supportsLatest) {
                                    dispatch({type: REDUCER_TYPES.UPDATE_SCORE})
                                }
                            }}
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
            <StyledNextButton
                onClick={() => dispatch({type: REDUCER_TYPES.SET_QUESTION})}
            >
                NEXT
            </StyledNextButton>
        </StyledQuestion>
    );
};


export default QuestionView;

