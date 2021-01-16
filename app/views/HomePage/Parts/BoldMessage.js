import React from 'react';
import { FormattedMessage } from 'react-intl';

const BoldMessage = ({ id }) => (
  <span style={{ fontWeight: 'bold' }}>
    <FormattedMessage id={id} />
  </span>
);

export default BoldMessage;
