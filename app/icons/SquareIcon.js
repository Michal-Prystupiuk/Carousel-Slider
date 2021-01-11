import React from 'react';
import { COLORS } from 'consts';

const SquareIcon = ({
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
    <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z" />
  </svg>
);

export default SquareIcon;
