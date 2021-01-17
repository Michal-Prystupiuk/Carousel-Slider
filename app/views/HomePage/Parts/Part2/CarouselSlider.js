import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AudioBookCard } from 'components';

import { updateAudioParameters } from 'containers/CarouselSlider/actions';
import { CurrentSetOfAudioBookSelector } from 'containers/CarouselSlider/selectors';

const CarouselSlider = () => {
  const set = useSelector(CurrentSetOfAudioBookSelector);

  const audio = new Audio(set[1].audio);

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
    const isMiddleAudioBookCard = index === 1;

    return (
      <AudioBookCard
        key={obj.id}
        index={index}
        value={obj}
        position="absolute"
        left={arrayOfLeftProperty[index]}
        zIndex={isMiddleAudioBookCard ? 10 : 0}
        top={isMiddleAudioBookCard ? '0px' : '80px'}
        audio={isMiddleAudioBookCard ? audio : null}
        widthInPx={isMiddleAudioBookCard ? '330px' : '248px'}
        heightInPx={isMiddleAudioBookCard ? '637px' : '477px'}
      />
    );
  });
};

export default CarouselSlider;
