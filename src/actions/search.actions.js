export const UPDATE_SEACH_FIELD = 'UPDATE_SEACH_FIELD';
export const SUBSCRIBE_TO_SHOW = 'SUBSCRIBE_TO_SHOW';

export const updateSeachField = value => ({
  type: UPDATE_SEACH_FIELD,
  value
});

export const subscribeToShow = show => ({
  type: SUBSCRIBE_TO_SHOW,
  show
});
