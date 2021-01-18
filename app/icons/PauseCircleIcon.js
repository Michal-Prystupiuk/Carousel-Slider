import React from 'react';
import { PropTypes } from 'prop-types';
import { COLORS } from 'consts';

const PauseCircleIcon = ({
  width = '1em',
  height = '1em',
  color = COLORS.white,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    fill={color}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 102.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 102.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
  </svg>
);

PauseCircleIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default PauseCircleIcon;
