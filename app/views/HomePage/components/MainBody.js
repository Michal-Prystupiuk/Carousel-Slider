import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Flex, Button } from 'rebass/styled-components';

import { StyledBody, StyledBodyContainer } from './styledComponents';
import CarouselSlider from './CarouselSlider';
import StyledMessage from './StyledMessage';

const MainBody = () => {
  console.log('hello');

  return (
    <StyledBody>
      <Text fontSize="1.5rem" fontWeight="700" mb="60px" lineHeight="1.2">
        <FormattedMessage id="homePage.mainBody.title" />
      </Text>

      <StyledBodyContainer>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxWidth="50%"
          pb="30px"
        >
          <Text fontSize="1rem">
            <FormattedMessage
              id="homePage.mainBody.section.1"
              values={{
                title: (
                  <StyledMessage
                    fontWeight="700"
                    id="homePage.mainBody.section.1.title"
                  />
                ),
              }}
            />
          </Text>

          <Button margin="20px" width="fit-content">
            <FormattedMessage id="homePage.mainBody.button.installApplication" />
          </Button>

          <Text fontSize="1rem">
            <FormattedMessage
              id="homePage.mainBody.section.2"
              values={{
                subtitle1: (
                  <StyledMessage
                    fontWeight="700"
                    id="homePage.mainBody.section.2.subtitle1"
                  />
                ),
                subtitle2: (
                  <StyledMessage
                    fontWeight="700"
                    id="homePage.mainBody.section.2.subtitle2"
                  />
                ),
                subtitle3: (
                  <StyledMessage
                    fontWeight="700"
                    id="homePage.mainBody.section.2.subtitle3"
                  />
                ),
              }}
            />
          </Text>
        </Flex>

        <Flex
          flexDirection="row"
          width="550px"
          height="580px"
          style={{ position: 'relative' }}
        >
          <CarouselSlider />
        </Flex>
      </StyledBodyContainer>
    </StyledBody>
  );
};

export default MainBody;
