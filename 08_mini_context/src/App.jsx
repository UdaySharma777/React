import { useState } from 'react'

import './App.css'
import UserContext from './context/User_context'
import UserContextProvider from './context/User_context_provider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
