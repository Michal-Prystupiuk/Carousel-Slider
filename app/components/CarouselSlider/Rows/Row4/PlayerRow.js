import React from 'react';
import { UndoIcon, PlayCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow } from './styledComponents';
import SkipArrow from './SkipArrow';

const PlayerRow = () => {
  console.log('row5');

  return (
    <StyledPlayerRow>
      <SkipArrow Icon={UndoIcon} text="15" />

      <PlayCircleIcon width="60px" height="60px" />

      <SkipArrow Icon={RedoIcon} text="30" />
    </StyledPlayerRow>
  );
};

export default PlayerRow;
