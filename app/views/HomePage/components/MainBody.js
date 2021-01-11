import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Flex, Button } from 'rebass/styled-components';
import emptyForm from 'images/empty_form.png';

import { StyledBody, StyledBodyContainer } from './styledComponents';

const MainBody = () => {
  console.log(emptyForm);

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
        >
          <Text fontSize="1rem">
            <FormattedMessage
              id="homePage.mainBody.section.1"
              values={{
                title: (
                  <b>
                    <FormattedMessage id="homePage.mainBody.section.1.title" />
                  </b>
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
                  <b>
                    <FormattedMessage id="homePage.mainBody.section.2.subtitle1" />
                  </b>
                ),
                subtitle2: (
                  <b>
                    <FormattedMessage id="homePage.mainBody.section.2.subtitle2" />
                  </b>
                ),
                subtitle3: (
                  <b>
                    <FormattedMessage id="homePage.mainBody.section.2.subtitle3" />
                  </b>
                ),
              }}
            />
          </Text>
        </Flex>

        <Flex maxWidth="555px" justifyContent="center" alignItems="center">
          <img src={emptyForm} alt="emptyForm" width="330px" />
        </Flex>

        {/* <StyledSliderContainer>
          <Text fontSize="20px">asdasdasddasda</Text>
        </StyledSliderContainer> */}
      </StyledBodyContainer>
    </StyledBody>
  );
};

export default MainBody;
