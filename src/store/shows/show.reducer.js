import { SUBSCRIBE_TO_SHOW, UNSUBSCRIBE_TO_SHOW, UPDATE_EPISODES } from './show.actions'

const initState = {
  shows: []
}

export function showReducer(state = initState, action) {
  switch (action.type) {
    case SUBSCRIBE_TO_SHOW:
      return { ...state, shows: [...state.shows, action.show] }
    case UNSUBSCRIBE_TO_SHOW:
      return { ...state, shows: state.shows.filter(show => show.id !== action.id) }
    case UPDATE_EPISODES:
      const show = Object.assign(
        {},
        state.shows.find(show => show.id === action.showsId),
        {
          episodes: action.episodes
        }
      )
      const shows = state.shows.filter(show => show.id !== action.showsId)
      return { ...state, shows: [...shows, show] }
    default:
      return state
  }
}
