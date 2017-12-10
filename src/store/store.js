import { createStore, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { searchReducer, searchEpic, emptySearchResultEpic } from './search'
import { showReducer, updateEpisodesEpic } from './shows'

export const rootEpic = combineEpics(
  searchEpic,
  updateEpisodesEpic,
  emptySearchResultEpic
)

const epicMiddleware = createEpicMiddleware(rootEpic)

function reducer(state = {}, action) {
  return {
    search: searchReducer(state.search, action),
    shows: showReducer(state.shows, action)
  }
}

export function configureStore() {
  return createStore(reducer, applyMiddleware(epicMiddleware))
}
