import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Flex } from 'rebass/styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { updateAudioParameters } from 'containers/CarouselSlider/actions';
import { CurrentAudioBookSelector } from 'containers/CarouselSlider/selectors';

import { UndoIcon, PlayCircleIcon, PauseCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow, StyledPlayButton } from './styledComponents';
import SkipArrow from './SkipArrow';

/** @type {React.FunctionComponent <{id: number,width: string, audio: any}/>} */
const PlayerRow = ({ id, width, audio }) => {
  const { current: currentAudio } = useRef(audio);
  const { isPaused, currentTime, totalDuration } = useSelector(
    CurrentAudioBookSelector,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPaused) {
      currentAudio.pause();
    } else {
      currentAudio.currentTime = currentTime;
      currentAudio.play();
    }

    return () => {
      if (!isPaused) {
        currentAudio.pause();
        pauseSound();
      }
    };
  }, [isPaused, currentAudio]);

  const updateAudio = obj => {
    dispatch(updateAudioParameters({ id, ...obj }));
  };

  const playSound = () =>
    updateAudio({
      isPaused: false,
    });

  const pauseSound = () =>
    updateAudio({
      isPaused: true,
      currentTime: currentAudio.currentTime,
    });

  const backwardSound = () => {
    const isTimeElapsedLongEnough = currentAudio.currentTime > 15;

    currentAudio.currentTime = isTimeElapsedLongEnough
      ? currentAudio.currentTime - 15
      : 0;

    updateAudio({
      currentTime: currentAudio.currentTime,
    });
  };

  const forwardSound = () => {
    const isTimeElapsedShortEnough =
      currentAudio.currentTime + 30 < totalDuration;

    currentAudio.currentTime = isTimeElapsedShortEnough
      ? currentAudio.currentTime + 30
      : totalDuration;

    updateAudio({
      currentTime: currentAudio.currentTime,
    });
  };

  return (
    <StyledPlayerRow>
      <SkipArrow
        Icon={UndoIcon}
        onClick={backwardSound}
        text="15"
        width={width}
      />

      <Flex width="25%" height="100%">
        {isPaused ? (
          <StyledPlayButton onClick={playSound}>
            <PlayCircleIcon width="100%" height="100%" cursor="pointer" />
          </StyledPlayButton>
        ) : (
          <PauseCircleIcon
            width="100%"
            height="100%"
            cursor="pointer"
            onClick={pauseSound}
          />
        )}
      </Flex>

      <SkipArrow
        Icon={RedoIcon}
        onClick={forwardSound}
        text="30"
        width={width}
      />
    </StyledPlayerRow>
  );
};

PlayerRow.propTypes = {
  id: PropTypes.number,
  width: PropTypes.string,
  audio: PropTypes.object,
};

export default PlayerRow;
