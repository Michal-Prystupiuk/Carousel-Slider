import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Flex } from 'rebass/styled-components';

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
import CategoryRow from './Rows/Row2';
import SliderRow from './Rows/Row3';
import { PlayerRow, DisabledPlayerRow } from './Rows/Row4';
import { FooterRow, DisabledFooterRow } from './Rows/Row5';

/** @type {React.FunctionComponent <{
 * widthInPx: string,
 * heightInPx: string,
 * value: { title: string, img: string },
 * audio: any,
 * index: number,
 * position?: string,
 * left?: string,
 * zIndex?: number}/>} */
const AudioBookCard = ({
  widthInPx,
  heightInPx,
  value,
  audio,
  index,
  ...props
}) => {
  const { title, img } = value;
  const id = useSelector(CurrentAudioBookIdSelector);

  const width = widthInPx.replace(/px/, '');

  const isLeftCard = index === 0;
  const isMiddleCard = index === 1;
  const isRightCard = index === 2;

  const dispatch = useDispatch();

  const onNext = () => dispatch(updateCurrentIdAction(id + 1 > 4 ? 0 : id + 1));
  const onBack = () => dispatch(updateCurrentIdAction(id - 1 < 0 ? 4 : id - 1));

  const onClick = () => {
    if (isLeftCard) return onBack();
    if (isRightCard) return onNext();

    return null;
  };

  return (
    <StyledBackground width={widthInPx} height={heightInPx} {...props}>
      <Flex width="6.5%" flexDirection="column">
        <Flex height="88px" />
        <Flex height="425px" onClick={isMiddleCard ? onBack : undefined} />
      </Flex>
      <Flex width="5.5%" flexDirection="column">
        <Flex height="425px" mt="10px" onClick={onClick} />
      </Flex>

      <StyledContainer onClick={onClick}>
        <StyledHeader>
          <HeaderRow title={title} width={width} />
        </StyledHeader>

        <StyledBody>
          <CategoryRow alt={title} img={img} width={width} />
          <SliderRow
            title={title}
            onNext={isMiddleCard ? onNext : undefined}
            onBack={isMiddleCard ? onBack : undefined}
            width={width}
          />
          {audio === null ? (
            <DisabledPlayerRow width={width} />
          ) : (
            <PlayerRow id={id} width={width} audio={audio} />
          )}
        </StyledBody>

        <StyledFooter>
          {isMiddleCard ? (
            <FooterRow id={id} width={width} />
          ) : (
            <DisabledFooterRow width={width} />
          )}
        </StyledFooter>
      </StyledContainer>

      <Flex width="5.5%" flexDirection="column">
        <Flex height="425px" mt="10px" onClick={onClick} />
      </Flex>
      <Flex width="6.5%" flexDirection="column">
        <Flex height="88px" />
        <Flex height="425px" onClick={isMiddleCard ? onNext : undefined} />
      </Flex>
    </StyledBackground>
  );
};

AudioBookCard.propTypes = {
  widthInPx: PropTypes.string,
  heightInPx: PropTypes.string,
  value: PropTypes.object,
  audio: PropTypes.object,
  index: PropTypes.number,
};

export default AudioBookCard;
