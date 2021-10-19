import { useDispatch } from 'react-redux'
import { filterNoImportantNotes, filterImportantNotes, filterAllNotes } from '../store/reducer/filterReducer'

function VisibilityFilter () {
  const dispatch = useDispatch()
  const filterSelected = value => {
    if (value === 'ALL') dispatch(filterAllNotes(value))
    if (value === 'IMPORTANT') dispatch(filterImportantNotes(value))
    if (value === 'NO IMPORTANT') dispatch(filterNoImportantNotes(value))
  }
  return (
    <div>
      all
      <input type='radio' name='filter' onChange={() => filterSelected('ALL')} />
      important
      <input type='radio' name='filter' onChange={() => filterSelected('IMPORTANT')} />
      no important
      <input type='radio' name='filter' onChange={() => filterSelected('NO IMPORTANT')} />
    </div>
  )
}

export default VisibilityFilter
