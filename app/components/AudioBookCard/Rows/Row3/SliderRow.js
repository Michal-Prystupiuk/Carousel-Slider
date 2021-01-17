import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass/styled-components';

import { ChevronLeftIcon, ChevronRightIcon } from 'icons';

import { StyledSliderRow } from './styledComponents';
import SliderIcon from './SliderIcon';

/** @type {React.FunctionComponent <{title: string, onNext?: function, onBack?: function, width: string }/>} */
const SliderRow = ({ title, onNext, onBack, width }) => {
  const fontSize = `${width / 440}rem`;

  return (
    <StyledSliderRow>
      <SliderIcon Icon={ChevronLeftIcon} onClick={onBack} />

      <Text fontSize={fontSize}>{title}</Text>

      <SliderIcon Icon={ChevronRightIcon} onClick={onNext} />
    </StyledSliderRow>
  );
};

SliderRow.propTypes = {
  title: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  width: PropTypes.string,
};

export default SliderRow;
