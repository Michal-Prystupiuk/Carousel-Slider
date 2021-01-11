import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

import { Row } from '../../styledComponents';

export const StyledHeaderRow = styled(Flex)`
  flex-direction: column;
`;

export const StyledIconRow = styled(Flex)`
  justify-content: flex-end;
  padding: 0px 3px 5px;
`;

export const StyledTitleRow = styled(Row)`
  grid-template-columns: 1fr 8fr 1fr;
`;
