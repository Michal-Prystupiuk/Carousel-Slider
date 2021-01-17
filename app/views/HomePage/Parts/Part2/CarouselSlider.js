import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AudioBookCard } from 'components';

import { updateAudioParameters } from 'containers/CarouselSlider/actions';
import { CurrentSetOfAudioBookSelector } from 'containers/CarouselSlider/selectors';

const CarouselSlider = () => {
  const set = useSelector(CurrentSetOfAudioBookSelector);

  const audio = new Audio(set[1].audio);
  // const [audioTune] = useState(new Audio(set[1].audio));

  const dispatch = useDispatch();

  const handleID = useCallback(
    e => {
      if (set[1].totalDuration === 0) {
        dispatch(
          updateAudioParameters({
            id: set[1].id,
            totalDuration: e.target.duration,
          }),
        );
      }
    },
    [set[1].id, dispatch, updateAudioParameters],
  );

  useEffect(() => {
    audio.addEventListener('loadedmetadata', handleID);

    return () => {
      audio.removeEventListener('loadedmetadata', handleID);
    };
  }, [handleID]);

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
        audio={isMiddleAudioBookCard ? audio : null}
      />
    );
  });
};

export default CarouselSlider;
