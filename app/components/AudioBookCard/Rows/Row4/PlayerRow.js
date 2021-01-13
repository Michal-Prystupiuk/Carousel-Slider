import React from 'react';
import { UndoIcon, PlayCircleIcon, RedoIcon } from 'icons';

import { StyledPlayerRow } from './styledComponents';
import SkipArrow from './SkipArrow';

const PlayerRow = ({ width }) => {
  console.log('row5');

  return (
    <StyledPlayerRow>
      <SkipArrow Icon={UndoIcon} text="15" width={width} />

      <PlayCircleIcon width="25%" height="100%" />

      <SkipArrow Icon={RedoIcon} text="30" width={width} />
    </StyledPlayerRow>
  );
};

export default PlayerRow;
