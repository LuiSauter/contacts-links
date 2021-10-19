import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// reducers
import { noteReducer } from './reducer/noteReducer'
import { filterReducer } from './reducer/filterReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
