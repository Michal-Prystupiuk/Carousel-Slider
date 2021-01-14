import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentAudioBookIdSelector } from 'containers/CarouselSlider/selectors';
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

const AudioBookCard = ({
  width,
  height,
  isDisabled = false,
  value,
  onClickNext = false,
  onClickBack = false,
  ...props
}) => {
  const { title, img } = value;
  const id = useSelector(CurrentAudioBookIdSelector);

  const dispatch = useDispatch();

  const onNext = () => dispatch(updateCurrentIdAction(id + 1 > 4 ? 0 : id + 1));

  const onBack = () => dispatch(updateCurrentIdAction(id - 1 < 0 ? 4 : id - 1));

  const onClick = () => {
    if (onClickNext) return onNext();
    if (onClickBack) return onBack();

    return null;
  };

  return (
    <StyledBackground
      width={width}
      height={height}
      onClick={onClick}
      {...props}
    >
      <StyledContainer>
        <StyledHeader>
          <HeaderRow title={title} width={width} />
        </StyledHeader>

        <StyledBody>
          <SelectorRow alt={title} img={img} width={width} />
          <SliderRow
            title={title}
            onNext={!isDisabled ? onNext : undefined}
            onBack={!isDisabled ? onBack : undefined}
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
