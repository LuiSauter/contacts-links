import { useDispatch, useSelector } from 'react-redux'

import { toggleImportanceOf } from '../store/reducer/noteReducer'
// import { updateNote } from '../services/notes'

function Notes () {
  const notes = useSelector(state => state.notes)
  const Filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  console.log(Filter)

  const toogleImportant = (note) => {
    const noteUpdate = {
      content: note.content,
      important: !note.important,
      id: note.id
    }
    dispatch(toggleImportanceOf(noteUpdate))
  }

  return (
    <ul>
      {
        notes
          .filter(note => note.important !== Filter.important)
          .map(note => {
            return (
              <li key={note.id} onClick={() => toogleImportant(note)}>
                {note.content}
                <strong>{note.important ? ' important' : ' not important'}</strong>
              </li>
            )
          })
        }
    </ul>

  )
}

export default Notes

// const mapStateToProps = state => {

// }

// const mapDispatchToProps = dispatch => ({})

// export default connect(mapStateToProps, mapDispatchToProps)(Notes)
