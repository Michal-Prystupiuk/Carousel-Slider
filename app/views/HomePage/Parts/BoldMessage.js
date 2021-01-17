import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';

/** @type {React.FunctionComponent <{id: string}/>} */
const BoldMessage = ({ id }) => (
  <span style={{ fontWeight: 'bold' }}>
    <FormattedMessage id={id} />
  </span>
);

BoldMessage.propTypes = {
  id: PropTypes.string,
};

export default BoldMessage;
