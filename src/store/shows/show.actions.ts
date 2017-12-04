export const SUBSCRIBE_TO_SHOW = 'SUBSCRIBE_TO_SHOW'
export const UNSUBSCRIBE_TO_SHOW = 'UNSUBSCRIBE_TO_SHOW'
export const UPDATE_EPISODES = 'UPDATE_EPISODES'

export const subscribeToShow = show => ({
  type: SUBSCRIBE_TO_SHOW,
  show
})

export const unsubscribeToShow = id => ({
  type: UNSUBSCRIBE_TO_SHOW,
  id
})

export const updateEpisodes = showsId => episodes => ({
  type: UPDATE_EPISODES,
  showsId,
  episodes
})
