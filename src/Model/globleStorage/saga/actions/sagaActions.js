export const NEW_FEED_SAGA = 'NEW_FEED_SAGA';

export const newFeedSaga = payload => ({
  type: NEW_FEED_SAGA,
  payload,
});
