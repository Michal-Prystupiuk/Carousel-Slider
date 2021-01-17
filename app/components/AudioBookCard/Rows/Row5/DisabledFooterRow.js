import React from 'react';
import { PropTypes } from 'prop-types';

import { SnoozeIcon, AVTimerIcon } from 'icons';

import { StyledFooterRow } from './styledComponents';

/** @type {React.FunctionComponent <{width: string}/>} */
const DisabledFooterRow = ({ width }) => {
  const iconWidth = `${width / 22}px`;

  return (
    <StyledFooterRow>
      <SnoozeIcon width={iconWidth} height="100%" />
      <AVTimerIcon width={iconWidth} height="100%" />
    </StyledFooterRow>
  );
};

DisabledFooterRow.propTypes = {
  width: PropTypes.string,
};

export default DisabledFooterRow;
