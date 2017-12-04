export const UPDATE_SEACH_FIELD = 'UPDATE_SEACH_FIELD'
export const UPDATE_SEACH_RESULT = 'UPDATE_SEACH_RESULT'

export const updateSeachField = value => ({
  type: UPDATE_SEACH_FIELD,
  value
})

export const updateSeachResult = shows => ({
  type: UPDATE_SEACH_RESULT,
  shows
})
