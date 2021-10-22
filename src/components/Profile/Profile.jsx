import { useContext } from 'react'
import UserContext from '../../context/User/UserContext'
function Profile () {
  const { selectedUser } = useContext(UserContext)
  return (
    <div className='grid-container__item-profile profile'>
      {
        selectedUser
          ? (
            <div className='profile__card'>
              <img src={selectedUser.avatar} alt={selectedUser.first_name} />
              <h3>{selectedUser.first_name} {selectedUser.last_name}</h3>
              <p><b>email:</b> {selectedUser.email}</p>
            </div>
            )
          : <h2>No user selected</h2>
      }
    </div>
  )
}

export default Profile
