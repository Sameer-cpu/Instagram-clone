import {combineReducers, createStore} from 'redux';
import {InitialUserData} from './reducer/reducers';
// import createSagaMiddleware from '@redux-saga/core';
// import {watcher} from '../saga/wachers/sagaWacher';

// const sagaMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({
  InitialUserData,
});

const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
// sagaMiddleWare.run(watcher);
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
// sagaMiddleWare.run(wacher);
export default store;
