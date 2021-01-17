import React, { useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { CurrentAudioBookSelector } from 'containers/CarouselSlider/selectors';
import { updateAudioParameters } from 'containers/CarouselSlider/actions';
import { UndoIcon, PlayCircleIcon, PauseCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow } from './styledComponents';
import SkipArrow from './SkipArrow';

const PlayerRow = ({ width, audio, totalDuration, id }) => {
  const audioRef = useRef(audio);

  const { isPaused, currentTime } = useSelector(
    CurrentAudioBookSelector,
    shallowEqual,
  );

  const dispatch = useDispatch();

  const updateAudio = obj => {
    dispatch(updateAudioParameters({ id, ...obj }));
  };

  useEffect(() => {
    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.currentTime = currentTime;
      audioRef.current.play();
    }

    return () => {
      if (!isPaused) {
        audioRef.current.pause();
        pauseSound();
      }
    };
  }, [isPaused, audioRef.current]);

  const playSound = () =>
    updateAudio({
      isPaused: false,
    });

  const pauseSound = () =>
    updateAudio({
      isPaused: true,
      currentTime: audioRef.current.currentTime,
    });

  const backwardSound = () => {
    const isTimeElapsedLongEnough = audioRef.current.currentTime > 15;

    audioRef.current.currentTime = isTimeElapsedLongEnough
      ? audioRef.current.currentTime - 15
      : 0;

    updateAudio({
      currentTime: audioRef.current.currentTime,
    });
  };

  const forwardSound = () => {
    const isTimeElapsedShortEnough =
      audioRef.current.currentTime + 30 < totalDuration;

    audioRef.current.currentTime = isTimeElapsedShortEnough
      ? audioRef.current.currentTime + 30
      : totalDuration;

    updateAudio({
      currentTime: audioRef.current.currentTime,
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

      {isPaused ? (
        <PlayCircleIcon
          onClick={playSound}
          width="25%"
          height="100%"
          cursor="pointer"
        />
      ) : (
        <PauseCircleIcon
          onClick={pauseSound}
          width="25%"
          height="100%"
          cursor="pointer"
        />
      )}

      <SkipArrow
        Icon={RedoIcon}
        onClick={forwardSound}
        text="30"
        width={width}
      />
    </StyledPlayerRow>
  );
};

export default PlayerRow;
