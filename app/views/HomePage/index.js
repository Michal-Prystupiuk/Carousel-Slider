import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from 'rebass';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/CarouselSlider/reducer';

import { Header, MainBody, Footer, CarouselSlider } from './components';

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

      <Flex flexDirection="column">
        {/* <Header />
        <MainBody />
        <Footer /> */}
        <CarouselSlider />
      </Flex>
    </>
  );
};

export default Homepage;
