import styled, { css } from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
`;

const success = css`
    -webkit-box-shadow: 6px -2px 61px 34px rgba(43,240,12,0.74);
    -moz-box-shadow: 6px -2px 61px 34px rgba(43,240,12,0.74);
    box-shadow: 6px -2px 61px 34px rgba(43,240,12,0.74);
`;

const fail = css`
    -webkit-box-shadow: 6px -2px 61px 34px rgba(255,0,0,1);
    -moz-box-shadow: 6px -2px 61px 34px rgba(255,0,0,1);
    box-shadow: 6px -2px 61px 34px rgba(255,0,0,1);
`;

const StyledListItem = styled.li`
  span {
        margin: 20px;
        font-size: 20px;
        border: 1px solid ghostwhite;
        background: ${props => props.selected ? 'ghostwhite' : '#3d3325'};
        color: ${props => props.selected ? '#3d3325' : 'ghostwhite'};
        border-radius: 10px;
        height: 40px;
        width: 100px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        ${props => props.selected ? props.valid ? success : fail : ''}
    }
`;

export {
    StyledList,
    StyledListItem
}
