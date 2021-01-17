import React from 'react';
import PropTypes from 'prop-types';

import { StyledSliderIcon } from './styledComponents';

/** @type {React.FunctionComponent <{Icon: function, onClick: function}/>} */
const SliderIcon = ({ Icon, onClick }) => (
  <StyledSliderIcon>{Icon && <Icon onClick={onClick} />}</StyledSliderIcon>
);

SliderIcon.propTypes = {
  Icon: PropTypes.func,
  onClick: PropTypes.func,
};

export default SliderIcon;
