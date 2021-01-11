import React from 'react';
import { Text } from 'rebass/styled-components';

import { ChevronLeftIcon, ChevronRightIcon } from 'icons';

import { StyledSliderRow } from './styledComponents';

const SliderRow = () => {
  console.log('row4');

  return (
    <StyledSliderRow>
      <ChevronLeftIcon width="10px" />

      <Text fontSize="0.75rem">Title</Text>

      <ChevronRightIcon width="10px" />
    </StyledSliderRow>
  );
};

export default SliderRow;
