import React from 'react';
import { FormattedMessage } from 'react-intl';

import zwierciadloPiekiel from 'images/zwierciadlo_piekiel.jpg';

import { StyledSelectorRow, StyledText, StyledImage } from './styledComponents';
import { Row } from '../../styledComponents';

const SelectorRow = () => {
  console.log('row2');

  return (
    <StyledSelectorRow>
      <Row template="1fr 1fr 1fr" gap="0px">
        <StyledText>
          <FormattedMessage id="carouselSlider.description" />
        </StyledText>

        <StyledText style={{ borderTop: '2px solid white' }}>
          <FormattedMessage id="carouselSlider.musicListener" />
        </StyledText>

        <StyledText>
          <FormattedMessage id="carouselSlider.chapters" />
        </StyledText>
      </Row>

      <Row template="1fr">
        <StyledImage src={zwierciadloPiekiel} alt="zwierciadloPiekiel" />
      </Row>
    </StyledSelectorRow>
  );
};

export default SelectorRow;
