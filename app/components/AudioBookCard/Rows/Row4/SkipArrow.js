import React from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'rebass/styled-components';

import { StyledArrow } from './styledComponents';

/** @type {React.FunctionComponent <{Icon: function, text: string, width: string, onClick?: function }/>} */
const SkipArrow = ({ Icon, text, width, onClick }) => (
  <StyledArrow onClick={onClick || undefined}>
    {Icon && <Icon width={`${width / 13.2}px`} height="100%" />}

    <Text fontSize={`${width / 440}rem`}>{text}</Text>
  </StyledArrow>
);

SkipArrow.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};

export default SkipArrow;
