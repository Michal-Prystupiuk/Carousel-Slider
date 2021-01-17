import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

export const StyledSliderRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5% 0;
`;

export const StyledSliderIcon = styled(Flex)`
  width: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5, 1.5);
    transition: 0.2s ease-in-out;
  }
`;
