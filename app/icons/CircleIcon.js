import React from 'react';
import { PropTypes } from 'prop-types';
import { COLORS } from 'consts';

const CircleIcon = ({
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
    <circle cx={8} cy={8} r={8} />
  </svg>
);

CircleIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default CircleIcon;
