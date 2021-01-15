import React, { useEffect, useState } from 'react';
import { UndoIcon, PlayCircleIcon, PauseCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow } from './styledComponents';
import SkipArrow from './SkipArrow';

const PlayerRow = ({ width, audioTune }) => {
  const [timeElapsed, setTimeElapsed] = useState(0); // in sec
  const [isPaused, setIsPaused] = useState(true);
  const [timeDuration, setTimeDuration] = useState(0); // in sec

  useEffect(() => {
    audioTune.load();
    audioTune.addEventListener('loadedmetadata', e => {
      setTimeDuration(e.target.duration);
    });
  }, [audioTune]);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => setTimeElapsed(timeElapsed + 1), 1000);
    }

    if (timeElapsed >= timeDuration) {
      pauseSound();
      setTimeElapsed(0);
      audioTune.currentTime = 0;
    }

    return () => clearInterval(timer);
  }, [timeElapsed, isPaused, setTimeElapsed, timeDuration]);

  console.log('timeElapsed', timeElapsed, '/', timeDuration);

  const playSound = () => {
    audioTune.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    audioTune.pause();
    setIsPaused(true);
  };

  const backwardSound = () => {
    const isTimeElapsedLongEnough = audioTune.currentTime > 15;

    audioTune.currentTime = isTimeElapsedLongEnough
      ? audioTune.currentTime - 15
      : 0;

    setTimeElapsed(audioTune.currentTime);
  };

  const forwardSound = () => {
    const isTimeElapsedShortEnough = audioTune.currentTime + 30 < timeDuration;

    audioTune.currentTime = isTimeElapsedShortEnough
      ? audioTune.currentTime + 30
      : timeDuration;

    setTimeElapsed(audioTune.currentTime);
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
