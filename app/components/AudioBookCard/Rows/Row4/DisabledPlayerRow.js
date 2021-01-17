import React from 'react';
import { PropTypes } from 'prop-types';
import { UndoIcon, PlayCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow } from './styledComponents';
import SkipArrow from './SkipArrow';

/** @type {React.FunctionComponent <{width: string}/>} */
const DisabledPlayerRow = ({ width }) => (
  <StyledPlayerRow>
    <SkipArrow Icon={UndoIcon} text="15" width={width} />

    <PlayCircleIcon width="25%" height="100%" cursor="pointer" />

    <SkipArrow Icon={RedoIcon} text="30" width={width} />
  </StyledPlayerRow>
);

DisabledPlayerRow.propTypes = {
  width: PropTypes.string,
};

export default DisabledPlayerRow;
