// @ts-check
import { SUBSCRIBE_TO_SHOW, UPDATE_SEACH_FIELD } from '../actions/search.actions.js';

const initState = {
  value: '',
  searchResult: []
};

export function searchReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_SEACH_FIELD:
      return { ...state, value: action.value };
    default:
      return state;
  }
}
