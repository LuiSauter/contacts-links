import UserState from './context/User/UserState'
import Home from './pages/home/Home'

function App () {
  return (
    <UserState>
      <Home />
    </UserState>
  )
}

export default App
