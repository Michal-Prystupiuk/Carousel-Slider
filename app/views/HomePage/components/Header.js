import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'rebass/styled-components';
import { COLORS } from 'consts';

import { StyledHeader } from './styledComponents';

const Header = () => (
  <StyledHeader>
    <Text color={COLORS.lightGreen}>
      <FormattedMessage
        id="homePage.header.1"
        values={{
          title: (
            <b>
              <FormattedMessage id="homePage.header.1.title" />
            </b>
          ),
        }}
      />
    </Text>

    <Text fontWeight="bold">
      <FormattedMessage id="homePage.header.2" />
    </Text>
  </StyledHeader>
);

export default Header;
