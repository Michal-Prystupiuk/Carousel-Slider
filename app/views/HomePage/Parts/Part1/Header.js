import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'rebass/styled-components';

import { COLORS } from 'consts';

import { StyledHeader } from './styledComponents';
import BoldMessage from '../BoldMessage';

const Header = () => (
  <StyledHeader>
    <Text color={COLORS.lightGreen}>
      <FormattedMessage
        id="homePage.header.1"
        values={{
          title: <BoldMessage id="homePage.header.1.title" />,
        }}
      />
    </Text>

    <Text fontWeight="700">
      <FormattedMessage id="homePage.header.2" />
    </Text>
  </StyledHeader>
);

export default Header;
