import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { CurrentAudiobookSelector } from 'containers/CarouselSlider/selectors';
import { updateCurrentIdAction } from 'containers/CarouselSlider/actions';

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

const AudioBookCard = ({ width, height, ...props }) => {
  const { title, id, img } = useSelector(
    CurrentAudiobookSelector,
    shallowEqual,
  );

  const dispatch = useDispatch();

  const onNext = () => {
    dispatch(updateCurrentIdAction(id + 1 > 4 ? 0 : id + 1));
  };

  const onBack = () => {
    dispatch(updateCurrentIdAction(id - 1 < 0 ? 4 : id - 1));
  };

  return (
    <StyledBackground width={width} height={height} {...props}>
      <StyledContainer>
        <StyledHeader>
          <HeaderRow title={title} width={width} />
        </StyledHeader>

        <StyledBody>
          <SelectorRow alt={title} img={img} width={width} />
          <SliderRow
            title={title}
            onNext={onNext}
            onBack={onBack}
            width={width}
          />
          <PlayerRow width={width} />
        </StyledBody>

        <StyledFooter>
          <FooterRow width={width} />
        </StyledFooter>
      </StyledContainer>
    </StyledBackground>
  );
};

export default AudioBookCard;
