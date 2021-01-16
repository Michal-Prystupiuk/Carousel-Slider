import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from 'rebass/styled-components';

import {
  StyledMainBodyContainer,
  StyledInnerBodyContainer,
  StyledTextSectionContainer,
  StyledSliderSectionContainer,
  StyledButton,
} from './styledComponents';
import BoldMessage from '../BoldMessage';

import CarouselSlider from './CarouselSlider';

const MainBody = () => (
  <StyledMainBodyContainer>
    <Text fontSize="1.5rem" fontWeight="700" mb="60px" lineHeight="1.2">
      <FormattedMessage id="homePage.mainBody.title" />
    </Text>

    <StyledInnerBodyContainer>
      <StyledTextSectionContainer>
        <Text fontSize="1rem">
          <FormattedMessage
            id="homePage.mainBody.section.1"
            values={{
              title: <BoldMessage id="homePage.mainBody.section.1.title" />,
            }}
          />
        </Text>

        <StyledButton>
          <FormattedMessage id="homePage.mainBody.button.installApplication" />
        </StyledButton>

        <Text fontSize="1rem">
          <FormattedMessage
            id="homePage.mainBody.section.2"
            values={{
              subtitle1: (
                <BoldMessage id="homePage.mainBody.section.2.subtitle1" />
              ),
              subtitle2: (
                <BoldMessage id="homePage.mainBody.section.2.subtitle2" />
              ),
              subtitle3: (
                <BoldMessage id="homePage.mainBody.section.2.subtitle3" />
              ),
            }}
          />
        </Text>
      </StyledTextSectionContainer>

      <StyledSliderSectionContainer>
        <CarouselSlider />
      </StyledSliderSectionContainer>
    </StyledInnerBodyContainer>
  </StyledMainBodyContainer>
);

export default MainBody;
