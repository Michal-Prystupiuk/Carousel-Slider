import React from 'react';
import { PropTypes } from 'prop-types';
import { COLORS } from 'consts';

const ThreeDotsVerticalIcon = ({
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
    <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

ThreeDotsVerticalIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default ThreeDotsVerticalIcon;
