import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'rebass/styled-components';
import { COLORS } from 'consts';

import BoldMessage from '../BoldMessage';
import { StyledFooter } from './styledComponents';

const Footer = () => (
  <StyledFooter>
    <Text color={COLORS.white} fontSize="1rem">
      <FormattedMessage
        id="homePage.footer"
        values={{
          happyClient: <BoldMessage id="homePage.footer.happyClient" />,
        }}
      />
    </Text>
  </StyledFooter>
);

export default Footer;
