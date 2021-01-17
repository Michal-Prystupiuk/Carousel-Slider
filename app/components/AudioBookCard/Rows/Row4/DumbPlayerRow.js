import React from 'react';

import { UndoIcon, PlayCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow } from './styledComponents';
import SkipArrow from './SkipArrow';

const DumbPlayerRow = ({ width }) => (
  <StyledPlayerRow>
    <SkipArrow Icon={UndoIcon} text="15" width={width} />
    <PlayCircleIcon width="25%" height="100%" cursor="pointer" />
    <SkipArrow Icon={RedoIcon} text="30" width={width} />
  </StyledPlayerRow>
);

export default DumbPlayerRow;
