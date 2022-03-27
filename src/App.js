import './App.css'
import { useState } from 'react'
import Login from './components/Login/Login'
import Main from './components/Main/Main'

const App = () => {
  const [token, setToken] = useState(true)

  return <>{token ? <Main /> : <Login />}</>
}

export default App
