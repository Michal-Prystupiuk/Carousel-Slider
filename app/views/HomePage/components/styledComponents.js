import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

import { COLORS } from 'consts';

export const StyledHeader = styled(Flex)`
  flex-direction: column;
  text-align: center;
  background-color: ${COLORS.lightGrey};
  padding: 20px 10px;
  font-size: 1.5rem;
`;

export const StyledFooter = styled(Flex)`
  flex-direction: column;
  text-align: center;
  background-color: ${COLORS.darkGreen};
  padding: 20px 10px;
  font-size: 1.5rem;
`;

export const StyledBody = styled(Flex)`
  flex-direction: column;
  text-align: center;
  padding: 60px 30px;
`;

export const StyledBodyContainer = styled(Flex)`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;
