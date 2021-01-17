/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_AUDIOBOOKS = 'CarouselSlider/GET_AUDIOBOOKS';
export const UPDATE_CURRENT_ID = 'CarouselSlider/UPDATE_CURRENT_ID';
export const UPDATE_AUDIO_DATA = 'CarouselSlider/UPDATE_AUDIO_DATA';
export const UPDATE_ID_AND_AUDIO = 'CarouselSlider/UPDATE_ID_AND_AUDIO';
