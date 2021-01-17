import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

import { COLORS } from 'consts';

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
  ${({ onClick }) =>
    onClick &&
    `
    &:hover {
      transform: scale(1.15, 1.15);
      transition: 0.2s ease-in-out;
    }
    cursor: pointer;
    `};
`;

export const StyledPlayButton = styled(Flex)`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 0 ${COLORS.darkGreen};
  border-radius: 50%;
  -webkit-animation: pulse 1.25s 3 cubic-bezier(0.5, 0, 0, 1);
  -moz-animation: pulse 1.25s 3 cubic-bezier(0.5, 0, 0, 1);
  -ms-animation: pulse 1.25s 3 cubic-bezier(0.5, 0, 0, 1);
  animation: pulse 1.25s 3 cubic-bezier(0.5, 0, 0, 1);

  &:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
  }

  @-webkit-keyframes pulse {
    to {
      box-shadow: 0 0 0 45px rgba(255, 255, 255, 0);
    }
  }
  @-moz-keyframes pulse {
    to {
      box-shadow: 0 0 0 45px rgba(255, 255, 255, 0);
    }
  }
  @-ms-keyframes pulse {
    to {
      box-shadow: 0 0 0 45px rgba(255, 255, 255, 0);
    }
  }
  @keyframes pulse {
    to {
      box-shadow: 0 0 0 45px rgba(255, 255, 255, 0);
    }
  }
`;
