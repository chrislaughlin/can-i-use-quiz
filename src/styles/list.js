import styled from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    li {
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
    }
`;

export {
    StyledList
}
