/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCarouselSlider = state => state.carouselSlider || initialState;

export const CurrentAudioBookIdSelector = createSelector(
  selectCarouselSlider,
  state => state.currentAudiobookId,
);

export const AudioBookListSelector = createSelector(
  selectCarouselSlider,
  state => state.data,
);

export const CurrentSetOfAudioBookSelector = createSelector(
  CurrentAudioBookIdSelector,
  AudioBookListSelector,
  (currentId, array) => {
    const set = [];

    if (currentId === 0) {
      set.push(array.find(obj => obj.id === 4));
    } else {
      set.push(array.find(obj => obj.id === currentId - 1));
    }

    set.push(array.find(obj => obj.id === currentId));

    if (currentId === 4) {
      set.push(array.find(obj => obj.id === 0));
    } else {
      set.push(array.find(obj => obj.id === currentId + 1));
    }

    return set;
  },
);
