import styled from 'styled-components';
import { Flex, Button } from 'rebass/styled-components';

export const StyledMainBodyContainer = styled(Flex)`
  flex-direction: column;
  text-align: center;
  padding: 60px 30px;
`;

export const StyledInnerBodyContainer = styled(Flex)`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;

export const StyledTextSectionContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  padding-bottom: 30px;
`;

export const StyledButton = styled(Button)`
  margin: 20px;
  width: fit-content;
`;

export const StyledSliderSectionContainer = styled(Flex)`
  flex-direction: row;
  width: 550px;
  height: 580px;
  position: relative;
`;
