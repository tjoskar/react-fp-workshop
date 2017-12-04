import { UPDATE_SEACH_FIELD, UPDATE_SEACH_RESULT } from './search.actions'

const initState = {
  value: '',
  searchResult: []
}

export function searchReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_SEACH_FIELD:
      return { ...state, value: action.value }
    case UPDATE_SEACH_RESULT:
      return { ...state, searchResult: action.shows }
    default:
      return state
  }
}
