import {put, takeLatest} from 'redux-saga/effects';
import {newFeed} from '../../redux/actions/actions';
import {newFeedSaga, NEW_FEED_SAGA} from '../actions/sagaActions';

function* newFeedWorker(action) {
  yield put(newFeed(action.payload));
  console.log({action: action.payload});
}

export function* watcher() {
  yield takeLatest(newFeedSaga, newFeedWorker);
}
