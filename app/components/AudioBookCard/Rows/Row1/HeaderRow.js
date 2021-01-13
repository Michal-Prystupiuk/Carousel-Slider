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

const HeaderRow = ({ title, width }) => {
  const widthInPx = width.replace(/px/, '');

  return (
    <StyledHeaderRow>
      <StyledIconRow>
        <SquareIcon
          width={`${widthInPx / 33 + 2}px`}
          height={`${widthInPx / 33 - 2}px`}
        />
        <CircleIcon
          width={`${widthInPx / 33 + 2}px`}
          height={`${widthInPx / 33 - 2}px`}
        />
        <TriangleIcon
          width={`${widthInPx / 33 + 2}px`}
          height={`${widthInPx / 33 - 2}px`}
          style={{ transform: 'rotate(180deg)' }}
        />
      </StyledIconRow>

      <StyledTitleRow>
        <XIcon
          width={`${widthInPx / 16.5}px`}
          height={`${widthInPx / 16.5}px`}
        />

        <Text fontSize={`${widthInPx / 440}rem`}>{title}</Text>

        <ThreeDotsVerticalIcon
          width={`${widthInPx / 16.5}px`}
          height={`${widthInPx / 16.5}px`}
        />
      </StyledTitleRow>
    </StyledHeaderRow>
  );
};

export default HeaderRow;
