import React from 'react';
import { Text } from 'rebass/styled-components';

import {
  SquareIcon,
  TriangleIcon,
  CircleIcon,
  XIcon,
  ThreeDotsVerticalIcon,
} from 'icons';

import {
  StyledHeaderRow,
  StyledIconRow,
  StyledTitleRow,
} from './styledComponents';

const HeaderRow = () => {
  console.log('row1');

  return (
    <StyledHeaderRow>
      <StyledIconRow>
        <SquareIcon height="9px" />
        <CircleIcon height="9px" />
        <TriangleIcon height="9px" style={{ transform: 'rotate(180deg)' }} />
      </StyledIconRow>

      <StyledTitleRow>
        <XIcon height="20px" width="20px" />

        <Text fontSize="0.75rem">Title</Text>

        <ThreeDotsVerticalIcon
          height="20px"
          width="20px"
          position="absolute"
          right="100px"
        />
      </StyledTitleRow>
    </StyledHeaderRow>
  );
};

export default HeaderRow;
