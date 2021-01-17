import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Text } from 'rebass/styled-components';

import { updateAudioParameters } from 'containers/CarouselSlider/actions';
import { CurrentAudioBookSelector } from 'containers/CarouselSlider/selectors';

import { SnoozeIcon, AVTimerIcon } from 'icons';

const FooterRow = ({ width, id, isDisabled }) => {
  const { isPaused, currentTime, totalDuration } = useSelector(
    CurrentAudioBookSelector,
  );

  const dispatch = useDispatch();

  const updateAudio = obj => {
    dispatch(updateAudioParameters({ id, ...obj }));
  };

  const [timeElapsed, setTimeElapsed] = useState(0); // in sec

  // for backward and forward action
  useEffect(() => {
    if (currentTime !== timeElapsed) {
      setTimeElapsed(currentTime);
    }
  }, [currentTime]);

  // for counter
  useEffect(() => {
    let timer;

    if (!isPaused) {
      timer = setInterval(() => setTimeElapsed(timeElapsed + 1), 1000);
    } else {
      setTimeElapsed(currentTime);
    }

    if (timeElapsed >= totalDuration) {
      setTimeElapsed(0);
      updateAudio({
        isPaused: true,
        currentTime: 0,
      });
    }

    return () => clearInterval(timer);
  }, [timeElapsed, isPaused, currentTime]);

  const iconWidth = `${width.replace(/px/, '') / 22}px`;

  const fu = val => {
    const timeInSec = Math.round(val * 100) / 100;
    const timeInMin = Math.floor(timeInSec / 60);
    const timelast = Math.round(timeInSec - timeInMin * 60);
    return `${timeInMin}:${timelast < 10 ? '0' : ''}${timelast}`;
  };

  return (
    <Flex justifyContent="space-between" mt="1%">
      <SnoozeIcon width={iconWidth} height="100%" />
      {!isDisabled && (
        <Text>
          {fu(timeElapsed)} / {fu(totalDuration)}
        </Text>
      )}
      <AVTimerIcon width={iconWidth} height="100%" />
    </Flex>
  );
};

export default FooterRow;
