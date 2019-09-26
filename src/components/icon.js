import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 10px;
`;

const Icon = ({icon, color = '#3D3425'}) => {
    return (
        <StyledIcon
            icon={['fab', icon]}
            size="5x"
            color={color}
        />
    )
};

export default Icon;
