import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from 'rebass/styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/CarouselSlider/reducer';

import { Header, MainBody, Footer } from './components';

const key = 'carouselSlider';

const Homepage = () => {
  useInjectReducer({ key, reducer });

  return (
    <>
      <Helmet>
        <title>Audioteka Page</title>
        <meta
          name="description"
          content="Audioteka Player Carousel page based on React.js Boilerplate application"
        />
      </Helmet>

      <Flex flexDirection="column" position="relative">
        <Header />
        <MainBody />
        <Footer />
      </Flex>
    </>
  );
};

export default Homepage;
