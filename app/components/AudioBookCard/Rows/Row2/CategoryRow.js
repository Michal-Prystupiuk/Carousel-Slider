import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { StyledCategoryRow, StyledText, StyledImage } from './styledComponents';
import { Row } from '../../styledComponents';

/** @type {React.FunctionComponent <{alt: string, img: string, width: string}/>} */
const CategoryRow = ({ alt, img, width }) => {
  const fontSize = `${width / 508}rem`;

  return (
    <StyledCategoryRow>
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
    </StyledCategoryRow>
  );
};

CategoryRow.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
  width: PropTypes.string,
};

export default CategoryRow;
