import { useDispatch } from 'react-redux'
import { createNote } from '../store/reducer/noteReducer'

function NewNote () {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault()
    const { target } = e
    const content = target.note.value
    if (content === '') return
    target.note.value = ''
    dispatch(createNote(content))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' type='text' />
        <button>add</button>
      </form>
    </div>
  )
}

export default NewNote
