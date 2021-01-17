import {
  GET_AUDIOBOOKS,
  UPDATE_CURRENT_ID,
  UPDATE_AUDIO_DATA,
  UPDATE_ID_AND_AUDIO,
} from './consts';

export const getAudiobooksAction = data => ({
  type: GET_AUDIOBOOKS,
  data,
});

export const updateCurrentIdAction = currentAudiobookId => ({
  type: UPDATE_CURRENT_ID,
  currentAudiobookId,
});

export const updateAudioParameters = audioData => ({
  type: UPDATE_AUDIO_DATA,
  audioData,
});

export const updateAudioAndId = (currentAudiobookId, audioData) => ({
  type: UPDATE_ID_AND_AUDIO,
  currentAudiobookId,
  audioData,
});
