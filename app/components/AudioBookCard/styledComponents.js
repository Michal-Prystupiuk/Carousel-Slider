import styled from 'styled-components';
import { space, position } from 'styled-system';
import { Flex } from 'rebass/styled-components';

import { COLORS } from 'consts';
import emptyForm from 'images/empty_form.png';

export const StyledBackground = styled(Flex)`
  ${space}
  ${position}
  background-image: url(${emptyForm});
  background-size: contain;
  background-repeat: no-repeat;
  user-select: none;
  transition: all .2s ease-in-out;
`;

export const StyledContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  margin-top: 3%;
  margin-bottom: 18%;
  color: ${COLORS.white};
`;

export const StyledHeader = styled(Flex)`
  background-image: linear-gradient(
    ${COLORS.brown} 10%,
    ${COLORS.darkBrown},
    ${COLORS.brown} 10%
  );
  background-color: ${COLORS.darkBrown};
  margin-top: 12%;
  border-radius: 20px 20px 0px 0px;
  padding: 5px 10px 10px;

  @media (max-width: 300px) {
    font-size: 0.55rem;
  }
`;

export const StyledBody = styled(Flex)`
  flex-direction: column;
  height: 100%;
  background-image: linear-gradient(
    ${COLORS.lightBrown} 8%,
    ${COLORS.lightPurple},
    ${COLORS.lightBlack},
    ${COLORS.darkPurple}
  );
  padding: 0px 10px 10px;
`;

export const StyledFooter = styled(Flex)`
  flex-direction: column;
  background-image: linear-gradient(
    ${COLORS.lightBlack},
    ${COLORS.lightPurple}
  );
  border-radius: 0px 0px 20px 20px;
  border-top: 2px solid ${COLORS.dividerColor};
  padding: 5px 10px 10px;
  margin-bottom: 14%;
`;

export const Row = styled.div`
  ${space}
  display: grid;
  align-items: center;
  ${({ gap = '20px' }) => `grid-column-gap: ${gap};`}
  ${({ template = '1fr 1fr' }) => `grid-template-columns: ${template};`}
`;
