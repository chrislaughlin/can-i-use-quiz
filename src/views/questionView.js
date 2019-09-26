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
import Icon from "../components/icon";

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

    return (
        <StyledQuestion>
            <ScoreView/>
            <StyledHeading
                noShadow
            >
                {question.name}
            </StyledHeading>
            <h3>
                {question.description}
            </h3>
            <StyledLink
                link={question.link}
            >
                more details
            </StyledLink>
            <h3>
                <StyledRules>
                    Select which browsers support this API on their latest version or if none go to the next API
                </StyledRules>
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
                                } else {
                                    dispatch({type: REDUCER_TYPES.REMOVE_LIFE})
                                }
                            }}
                        >
                            <Icon
                                icon={browser.code}
                                color={isSelected ? isSelected.supportsLatest ? 'green' : 'red' : undefined}
                            />
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

