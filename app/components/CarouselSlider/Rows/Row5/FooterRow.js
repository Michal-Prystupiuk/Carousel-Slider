import React from 'react';
import { Flex } from 'rebass/styled-components';

import { SnoozeIcon, AVTimerIcon } from 'icons';

const FooterRow = () => {
  console.log('row6');

  return (
    <Flex justifyContent="space-between" mt="6px">
      <SnoozeIcon />
      <AVTimerIcon />
    </Flex>
  );
};

export default FooterRow;
