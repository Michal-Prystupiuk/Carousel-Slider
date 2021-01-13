import React from 'react';
import { Flex } from 'rebass/styled-components';
import { AudioBookCard } from 'components';

const CarouselSlider = () => {
  console.log('carousel');

  return (
    <Flex flexDirection="row" position="relative" width="528px">
      <Flex
        flexDirection="row"
        mt="80px"
        width="100%"
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <AudioBookCard width="248px" height="477px" />
        </Flex>

        <Flex flexDirection="column">
          <AudioBookCard width="248px" height="477px" />
        </Flex>
      </Flex>

      <Flex flexDirection="column">
        <AudioBookCard
          width="330px"
          height="635px"
          position="absolute"
          top="0"
          left="100px"
          zIndex={1}
        />
      </Flex>
    </Flex>
  );
};

export default CarouselSlider;
