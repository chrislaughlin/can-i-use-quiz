import styled from "styled-components";

const StyledLink = styled.a.attrs(props => {
    return {
        href: props.link,
        target: '_blank',
        rel: 'noopener noreferrer'
    }
})`
    padding-left: 5px;
    color: #3d3325;
    font-weight: bolder;
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
`;

export {
    StyledLink
}
