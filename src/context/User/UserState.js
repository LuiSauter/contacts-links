// Definicion del estado
import { useReducer } from 'react'
import axios from 'axios'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import config from '../../config'
function UserState ({ children }) {
  const initialState = {
    users: [],
    selectedUser: null
  }
  const { API_URL } = config
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    const res = await axios.get(`${API_URL}?page=1`)
    const { data } = res
    dispatch({
      type: 'GET_USERS',
      payload: data.data
    })
  }

  const getProfile = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`)
    const { data } = res
    dispatch({
      type: 'GET_PROFILE',
      payload: data.data
    })
  }

  return (
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
