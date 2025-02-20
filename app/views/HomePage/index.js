import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from 'rebass/styled-components';

import Header from './Parts/Part1';
import MainBody from './Parts/Part2';
import Footer from './Parts/Part3';

const Homepage = () => (
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

export default Homepage;
