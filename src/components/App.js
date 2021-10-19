import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initNotes } from '../store/reducer/noteReducer'
import NewNote from './NewNote'
import VisibilityFilter from './VisibilityFilter'
import Notes from './Notes'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initNotes())
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
