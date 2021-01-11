import React from 'react';

import {
  StyledBackground,
  StyledContainer,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from './styledComponents';

import HeaderRow from './Rows/Row1';
import SelectorRow from './Rows/Row2';
import SliderRow from './Rows/Row3';
import PlayerRow from './Rows/Row4';
import FooterRow from './Rows/Row5';

const CarouselSlider = () => (
  <StyledBackground>
    <StyledContainer>
      <StyledHeader>
        <HeaderRow />
      </StyledHeader>

      <StyledBody>
        <SelectorRow />
        <SliderRow />
        <PlayerRow />
      </StyledBody>

      <StyledFooter>
        <FooterRow />
      </StyledFooter>
    </StyledContainer>
  </StyledBackground>
);

export default CarouselSlider;
