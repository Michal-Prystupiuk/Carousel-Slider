import React from 'react';
import { Text } from 'rebass/styled-components';

import { StyledArrow } from './styledComponents';

const SkipArrow = ({ Icon, text, width }) => (
  <StyledArrow>
    {Icon && (
      <Icon width={`${width.replace(/px/, '') / 13.2}px`} height="100%" />
    )}

    <Text fontSize={`${width.replace(/px/, '') / 440}rem`}>{text}</Text>
  </StyledArrow>
);

export default SkipArrow;
