/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCarouselSlider = state => state.carouselSlider || initialState;

export const CurrentAudiobookSelector = createSelector(
  selectCarouselSlider,
  state => state.data.find(obj => obj.id === state.currentAudiobookId),
);
