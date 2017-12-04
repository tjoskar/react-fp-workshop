export const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD'
export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT'

export const updateSeachField = value => ({
  type: UPDATE_SEARCH_FIELD,
  value
})

export const updateSeachResult = shows => ({
  type: UPDATE_SEARCH_RESULT,
  shows
})
