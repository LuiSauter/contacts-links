import { useEffect, useContext } from 'react'
import UserContext from '../../context/User/UserContext'

function UserList () {
  const { users, getUsers, getProfile } = useContext(UserContext)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='grid-container__item-list list'>
      {
        users.map(user => (
          <div className='list__flex' key={user.id} onClick={() => getProfile(user.id)}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UserList
