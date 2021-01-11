import React from 'react';

import {
  StyledTopBorder,
  StyledBottomBorder,
  StyledContainer,
} from './styledComponents';

import HeaderRow from './Rows/Row1';
import SelectorRow from './Rows/Row2';
import SliderRow from './Rows/Row3';
import PlayerRow from './Rows/Row4';
import FooterRow from './Rows/Row5';

const CarouselSlider = () => (
  <StyledContainer>
    <StyledTopBorder>
      <HeaderRow />
    </StyledTopBorder>

    <StyledBottomBorder>
      <SelectorRow />
      <SliderRow />
      <PlayerRow />
      <FooterRow />
    </StyledBottomBorder>
  </StyledContainer>
);

export default CarouselSlider;
