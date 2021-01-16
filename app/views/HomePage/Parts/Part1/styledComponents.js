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
