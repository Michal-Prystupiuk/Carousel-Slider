import React from 'react';
import { Text } from 'rebass/styled-components';

import { ChevronLeftIcon, ChevronRightIcon } from 'icons';

import { StyledSliderRow } from './styledComponents';

const SliderRow = ({ title, onNext, onBack, width }) => {
  const fontSize = `${width.replace(/px/, '') / 440}rem`;

  return (
    <StyledSliderRow>
      <ChevronLeftIcon width="10px" onClick={onBack} />

      <Text fontSize={fontSize}>{title}</Text>

      <ChevronRightIcon width="10px" onClick={onNext} />
    </StyledSliderRow>
  );
};

export default SliderRow;
