import { getAll, postNewNote, updateNote } from '../../services/notes'

export const noteReducer = (state = [], action) => {
  // console.log('ACTIONnote', action)
  switch (action.type) {
    case '@notes/init':
      return action.payload

    case '@notes/created':
      return [...state, action.payload]

    case '@notes/toggle_important':
      return state.map(note => {
        const { id } = action.payload
        if (note.id === id) {
          return {
            ...note,
            important: !note.important
          }
        }
        return note
      })
    default:
      break
  }
  return state
}

export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll()

    dispatch({
      type: '@notes/init',
      payload: notes
    })
  }
}

export const createNote = content => {
  return async (dispatch) => {
    const newNote = await postNewNote(content)

    dispatch({
      type: '@notes/created',
      payload: newNote
    })
  }
}

export const toggleImportanceOf = note => {
  return async (dispatch) => {
    const upNote = await updateNote(note)

    dispatch({
      type: '@notes/toggle_important',
      payload: { id: upNote.id }
    })
  }
}
