import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Text } from 'rebass/styled-components';

import { updateAudioParameters } from 'containers/CarouselSlider/actions';
import { CurrentAudioBookSelector } from 'containers/CarouselSlider/selectors';

import { SnoozeIcon, AVTimerIcon } from 'icons';

import { formatToTimeDisplayed } from './utils';
import { StyledFooterRow } from './styledComponents';

/** @type {React.FunctionComponent <{id: number, width: string}/>} */
const FooterRow = ({ id, width }) => {
  const { isPaused, currentTime, totalDuration } = useSelector(
    CurrentAudioBookSelector,
  );
  const [timeElapsed, setTimeElapsed] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTime !== timeElapsed) {
      setTimeElapsed(currentTime);
    }
  }, [currentTime]);

  useEffect(() => {
    let timer;

    if (!isPaused) {
      timer = setInterval(() => setTimeElapsed(timeElapsed + 1), 1000);
    } else {
      setTimeElapsed(currentTime);
    }

    if (timeElapsed >= totalDuration) {
      if (currentTime !== 0) {
        dispatch(
          updateAudioParameters({
            id,
            isPaused: true,
            currentTime: 0,
          }),
        );
      }
      setTimeElapsed(currentTime);
    }

    return () => clearInterval(timer);
  }, [timeElapsed, isPaused, currentTime]);

  const iconWidth = `${width / 22}px`;

  return (
    <StyledFooterRow>
      <SnoozeIcon width={iconWidth} height="100%" />

      <Text>
        {formatToTimeDisplayed(timeElapsed)}
        {' / '}
        {formatToTimeDisplayed(totalDuration)}
      </Text>

      <AVTimerIcon width={iconWidth} height="100%" />
    </StyledFooterRow>
  );
};

FooterRow.propTypes = {
  id: PropTypes.number,
  width: PropTypes.string,
};

export default FooterRow;
