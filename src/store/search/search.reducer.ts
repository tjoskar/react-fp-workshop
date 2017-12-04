import { UPDATE_SEARCH_FIELD, UPDATE_SEARCH_RESULT } from './search.actions'

const initState = {
  value: '',
  searchResult: [],
  loading: false
}

export function searchReducer(state = initState, action): typeof initState {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      return { ...state, value: action.value, loading: true }
    case UPDATE_SEARCH_RESULT:
      return { ...state, searchResult: action.shows, loading: false }
    default:
      return state
  }
}
