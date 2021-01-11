import styled from 'styled-components';
import { Flex, Text } from 'rebass/styled-components';

import { COLORS } from 'consts';

export const StyledSelectorRow = styled(Flex)`
  justify-content: center;
  flex-direction: column;
`;

export const StyledText = styled(Text)`
  padding: 10px 0px;
  font-size: 0.65rem;
  text-align: center;
  color: ${COLORS.darkGrey};
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
