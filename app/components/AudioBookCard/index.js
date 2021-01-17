import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from 'rebass/styled-components';

import {
  CurrentAudioBookIdSelector,
  CurrentAudioBookSelector,
} from 'containers/CarouselSlider/selectors';
import {
  updateCurrentIdAction,
  updateAudioParameters,
} from 'containers/CarouselSlider/actions';

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
import DumbPlayerRow from './Rows/Row4/DumbPlayerRow';
import FooterRow from './Rows/Row5';

const AudioBookCard = ({
  width,
  height,
  isDisabled = false,
  value,
  onClickNext = false,
  onClickBack = false,
  audio,
  index,
  ...props
}) => {
  const { title, img, totalDuration } = value;

  // const audio = useRef(audioTune);

  const id = useSelector(CurrentAudioBookIdSelector);

  const { currentTime } = useSelector(CurrentAudioBookSelector);

  const dispatch = useDispatch();

  const updateAudio = obj => {
    dispatch(updateAudioParameters({ id, ...obj }));
  };

  useEffect(() => {
    if (audio !== null) {
      updateAudio({
        isPaused: true,
        currentTime,
      });
    }
  }, [onNext, onBack]);

  const onNext = () => dispatch(updateCurrentIdAction(id + 1 > 4 ? 0 : id + 1));
  const onBack = () => dispatch(updateCurrentIdAction(id - 1 < 0 ? 4 : id - 1));

  const onClick = () => {
    if (onClickNext) return onNext();
    if (onClickBack) return onBack();

    return null;
  };

  return (
    <StyledBackground width={width} height={height} {...props}>
      <Flex width="6.5%" flexDirection="column">
        <Flex height="88px" />
        <Flex height="425px" onClick={!isDisabled ? onBack : undefined} />
      </Flex>
      <Flex width="5.5%" flexDirection="column">
        <Flex height="425px" mt="10px" onClick={onClick} />
      </Flex>

      <StyledContainer onClick={onClick}>
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
          {audio === null ? (
            <DumbPlayerRow width={width} />
          ) : (
            <PlayerRow
              width={width}
              audio={audio}
              totalDuration={totalDuration}
              id={id}
              isDisabled={isDisabled}
            />
          )}
        </StyledBody>

        <StyledFooter>
          <FooterRow
            width={width}
            totalDuration={totalDuration}
            id={id}
            isDisabled={isDisabled}
          />
        </StyledFooter>
      </StyledContainer>

      <Flex width="5.5%" flexDirection="column">
        <Flex height="425px" mt="10px" onClick={onClick} />
      </Flex>
      <Flex width="6.5%" flexDirection="column">
        <Flex height="88px" />
        <Flex height="425px" onClick={!isDisabled ? onNext : undefined} />
      </Flex>
    </StyledBackground>
  );
};

export default AudioBookCard;
