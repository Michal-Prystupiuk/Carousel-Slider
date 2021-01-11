import React from 'react';
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

export default CircleIcon;
