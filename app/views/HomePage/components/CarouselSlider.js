import React from 'react';
import { useSelector } from 'react-redux';

import { AudioBookCard } from 'components';

import { CurrentSetOfAudioBookSelector } from 'containers/CarouselSlider/selectors';

const CarouselSlider = () => {
  const set = useSelector(CurrentSetOfAudioBookSelector);

  return set.map((obj, index) => {
    const arrayOfLeftProperty = ['0px', '100px', '280px'];
    const isMiddleAudioBookCard = index % 3 === 1;

    return (
      <AudioBookCard
        key={obj.id}
        width={isMiddleAudioBookCard ? '330px' : '248px'}
        height={isMiddleAudioBookCard ? '637px' : '477px'}
        position="absolute"
        left={arrayOfLeftProperty[index]}
        top={isMiddleAudioBookCard ? '0px' : '80px'}
        zIndex={isMiddleAudioBookCard ? 10 : 0}
        isDisabled={!isMiddleAudioBookCard}
        onClickNext={index % 3 === 2}
        onClickBack={index % 3 === 0}
        value={obj}
      />
    );
  });
};

export default CarouselSlider;
