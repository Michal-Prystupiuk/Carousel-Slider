import React from 'react';
import { Flex } from 'rebass/styled-components';

import { SnoozeIcon, AVTimerIcon } from 'icons';

const FooterRow = ({ width }) => {
  const iconWidth = `${width.replace(/px/, '') / 22}px`;

  return (
    <Flex justifyContent="space-between" mt="1%">
      <SnoozeIcon width={iconWidth} height="100%" />
      <AVTimerIcon width={iconWidth} height="100%" />
    </Flex>
  );
};

export default FooterRow;
