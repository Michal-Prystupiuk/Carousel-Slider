import styled from 'styled-components';
import { space } from 'styled-system';
import { Flex } from 'rebass/styled-components';

import { COLORS } from 'consts';
import emptyForm from 'images/empty_form.png';

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  width: 330px;
  height: 636px;
  background-image: url(${emptyForm});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTopBorder = styled(Flex)`
  flex-direction: column;
  width: 269px;
  height: 52px;
  background-image: linear-gradient(
    ${COLORS.brown} 10%,
    ${COLORS.darkBrown},
    ${COLORS.brown} 10%
  );
  background-color: ${COLORS.darkBrown};
  margin-left: 30px;
  margin-top: 40px;
  border-radius: 25px 25px 0px 0px;
  padding: 5px 10px 10px;
  color: ${COLORS.white};
`;

export const StyledBottomBorder = styled(Flex)`
  flex-direction: column;
  width: 269px;
  height: 450px;
  background-image: linear-gradient(
    ${COLORS.lightBrown} 8%,
    ${COLORS.lightPurple},
    ${COLORS.lightBlack},
    ${COLORS.darkPurple}
  );
  margin-left: 30px;
  border-radius: 0px 0px 25px 25px;
  padding: 0px 10px 10px;
  color: ${COLORS.white};
`;

export const Row = styled.div`
  ${space}
  display: grid;
  align-items: center;
  ${({ gap = '20px' }) => `grid-column-gap: ${gap};`}
  ${({ template = '1fr 1fr' }) => `grid-template-columns: ${template};`}
`;
