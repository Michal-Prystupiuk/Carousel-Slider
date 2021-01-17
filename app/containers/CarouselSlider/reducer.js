/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LIST_OF_AUDIOBOOKS } from 'consts';
import {
  GET_AUDIOBOOKS,
  UPDATE_CURRENT_ID,
  UPDATE_AUDIO_DATA,
  UPDATE_ID_AND_AUDIO,
} from './consts';

// The initial state of the App
export const initialState = {
  currentAudiobookId: 0,
  data: LIST_OF_AUDIOBOOKS,
};

/* eslint-disable default-case, no-param-reassign */
const carouselReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_AUDIOBOOKS:
        draft.data = action.data;
        break;
      case UPDATE_CURRENT_ID:
        draft.currentAudiobookId = action.currentAudiobookId;
        break;
      case UPDATE_AUDIO_DATA:
        draft.data[action.audioData.id] = {
          ...draft.data[action.audioData.id],
          ...action.audioData,
        };
        break;
      case UPDATE_ID_AND_AUDIO:
        draft.currentAudiobookId = action.currentAudiobookId;
        draft.data[action.audioData.id] = {
          ...draft.data[action.audioData.id],
          ...action.audioData,
        };
    }
  });

export default carouselReducer;
