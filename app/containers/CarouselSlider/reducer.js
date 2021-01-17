/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LIST_OF_AUDIO_BOOKS } from 'consts';
import { UPDATE_CURRENT_ID, UPDATE_AUDIO_DATA } from './consts';

// The initial state of the App
export const initialState = {
  currentAudioBookId: 0,
  data: LIST_OF_AUDIO_BOOKS,
};

/* eslint-disable default-case, no-param-reassign */
const carouselReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_CURRENT_ID:
        draft.currentAudioBookId = action.currentAudioBookId;
        break;
      case UPDATE_AUDIO_DATA:
        draft.data[action.audioData.id] = {
          ...draft.data[action.audioData.id],
          ...action.audioData,
        };
        break;
    }
  });

export default carouselReducer;
