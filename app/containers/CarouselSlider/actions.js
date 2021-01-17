import { UPDATE_CURRENT_ID, UPDATE_AUDIO_DATA } from './consts';

export const updateCurrentIdAction = currentAudioBookId => ({
  type: UPDATE_CURRENT_ID,
  currentAudioBookId,
});

export const updateAudioParameters = audioData => ({
  type: UPDATE_AUDIO_DATA,
  audioData,
});
