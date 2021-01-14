import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

import { Row } from '../../styledComponents';

export const StyledHeaderRow = styled(Flex)`
  flex-direction: column;
`;

export const StyledIconRow = styled(Flex)`
  justify-content: flex-end;
  padding: 0 1.25% 3%;
`;

export const StyledTitleRow = styled(Row)`
  text-align: left;
  grid-template-columns: 1fr 8fr 1fr;
`;
