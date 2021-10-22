import Profile from '../../components/Profile/Profile'
import UserList from '../../components/UserList/UserList'

function Home () {
  return (
    <div className='grid-container'>
      <UserList />
      <Profile />
    </div>
  )
}

export default Home
