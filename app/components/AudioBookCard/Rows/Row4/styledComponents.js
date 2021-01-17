import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

export const StyledPlayerRow = styled(Flex)`
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 3%;
`;

export const StyledArrow = styled(Flex)`
  flex-direction: column;
  align-items: center;
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;
