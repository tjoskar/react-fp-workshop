// @ts-check
import {
  combineEpics,
  createStore,
  createEpicMiddleware,
  applyMiddleware
} from '../../vendors.bundle.js';
import { searchReducer, searchEpic } from './search/index.js';
import { showReducer, updateEpisodesEpic } from './shows/index.js';

export const rootEpic = combineEpics(searchEpic, updateEpisodesEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);

function reducer(state = {}, action) {
  return {
    search: searchReducer(state.search, action),
    shows: showReducer(state.shows, action)
  };
}

export function configureStore() {
  const store = createStore(reducer, applyMiddleware(epicMiddleware));
  return store;
}
