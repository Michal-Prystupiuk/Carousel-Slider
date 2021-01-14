import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

import { COLORS } from 'consts';
import emptyForm from 'images/empty_form.png';

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

export const StyledSliderContainer = styled(Flex)`
  max-width: 50%;
  justify-content: center;
  background-image: url(${emptyForm});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: red;
`;

export const StyledF = styled(Flex)`
  flex-direction: column;
`;
