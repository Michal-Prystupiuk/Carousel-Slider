import React from 'react';
import { FormattedMessage } from 'react-intl';

const StyledMessage = ({ id, ...props }) => (
  <span style={{ ...props }}>
    <FormattedMessage id={id} />
  </span>
);

export default StyledMessage;
