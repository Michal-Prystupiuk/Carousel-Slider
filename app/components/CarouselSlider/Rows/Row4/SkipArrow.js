import React from 'react';
import { Text } from 'rebass/styled-components';

import { StyledArrow } from './styledComponents';

const SkipArrow = ({ Icon, text }) => (
  <StyledArrow>
    {Icon && <Icon width="25px" height="25px" />}

    <Text fontSize="0.75rem">{text}</Text>
  </StyledArrow>
);

export default SkipArrow;
