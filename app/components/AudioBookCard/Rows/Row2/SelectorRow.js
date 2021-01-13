import React from 'react';
import { FormattedMessage } from 'react-intl';

import { StyledSelectorRow, StyledText, StyledImage } from './styledComponents';
import { Row } from '../../styledComponents';

const SelectorRow = ({ alt, img, width }) => {
  const fontSize = `${width.replace(/px/, '') / 508}rem`;

  return (
    <StyledSelectorRow>
      <Row template="1fr 1fr 1fr" gap="0px">
        <StyledText fontSize={fontSize}>
          <FormattedMessage id="carouselSlider.description" />
        </StyledText>

        <StyledText
          style={{ borderTop: '2px solid white' }}
          fontSize={fontSize}
        >
          <FormattedMessage id="carouselSlider.musicListener" />
        </StyledText>

        <StyledText fontSize={fontSize}>
          <FormattedMessage id="carouselSlider.chapters" />
        </StyledText>
      </Row>

      <Row template="1fr">
        <StyledImage src={img} alt={alt} />
      </Row>
    </StyledSelectorRow>
  );
};

export default SelectorRow;
