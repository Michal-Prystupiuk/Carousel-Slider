import React from 'react';
import { Helmet } from 'react-helmet';
import { Flex } from 'rebass';

import { Header, MainBody, Footer } from './components';

const Homepage = () => (
  <>
    <Helmet>
      <title>Audioteka Page</title>
      <meta
        name="description"
        content="Audioteka Player Carousel page based on React.js Boilerplate application"
      />
    </Helmet>

    <Flex flexDirection="column">
      <Header />
      <MainBody />
      <Footer />
    </Flex>
  </>
);

export default Homepage;
