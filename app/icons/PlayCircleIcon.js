import React from 'react';
import { PropTypes } from 'prop-types';
import { COLORS } from 'consts';

const PlayCircleIcon = ({
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
    <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.79 5.093A.5.5 0 006 5.5v5a.5.5 0 00.79.407l3.5-2.5a.5.5 0 000-.814l-3.5-2.5z" />
  </svg>
);

PlayCircleIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default PlayCircleIcon;
