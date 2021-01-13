import { GET_AUDIOBOOKS, UPDATE_CURRENT_ID } from './consts';

export const getAudiobooksAction = data => ({
  type: GET_AUDIOBOOKS,
  data,
});

export const updateCurrentIdAction = currentAudiobookId => ({
  type: UPDATE_CURRENT_ID,
  currentAudiobookId,
});
