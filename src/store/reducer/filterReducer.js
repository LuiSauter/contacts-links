export const filterReducer = (state = [], action) => {
  console.log('ACTIONfilter', action)
  if (action.type === '@notes/filter_important') {
    return action.payload
  }

  if (action.type === '@notes/filter_no_important') {
    return action.payload
  }

  if (action.type === '@notes/filter_all') {
    return action.payload
  }

  return state
}

export const filterImportantNotes = (value) => {
  return {
    type: '@notes/filter_important',
    payload: {
      filter: value,
      important: false
    }
  }
}

export const filterNoImportantNotes = (value) => {
  return {
    type: '@notes/filter_no_important',
    payload: {
      filter: value,
      important: true
    }
  }
}

export const filterAllNotes = (value) => {
  return {
    type: '@notes/filter_all',
    payload: {
      filter: value,
      important: null
    }
  }
}
