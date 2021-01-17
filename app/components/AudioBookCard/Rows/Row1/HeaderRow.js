import React from 'react';
import PropTypes from 'prop-types';
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

/** @type {React.FunctionComponent <{title: string, width: string}/>} */
const HeaderRow = ({ title, width }) => (
  <StyledHeaderRow>
    <StyledIconRow>
      <SquareIcon
        width={`${width / 33 + 2}px`}
        height={`${width / 33 - 2}px`}
      />
      <CircleIcon
        width={`${width / 33 + 2}px`}
        height={`${width / 33 - 2}px`}
      />
      <TriangleIcon
        width={`${width / 33 + 2}px`}
        height={`${width / 33 - 2}px`}
        style={{ transform: 'rotate(180deg)' }}
      />
    </StyledIconRow>

    <StyledTitleRow>
      <XIcon width={`${width / 16.5}px`} height={`${width / 16.5}px`} />

      <Text fontSize={`${width / 440}rem`}>{title}</Text>

      <ThreeDotsVerticalIcon
        width={`${width / 16.5}px`}
        height={`${width / 16.5}px`}
      />
    </StyledTitleRow>
  </StyledHeaderRow>
);

HeaderRow.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
};

export default HeaderRow;
