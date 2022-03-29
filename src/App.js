import './App.css'
import { useState } from 'react'
import Login from './layout/Login/Login'
import Main from './layout/Main/Main'
import Spinner from './utils/Spinner'

const App = () => {
  const [token, setToken] = useState(true)
  const loading = false

  return <>{token ? <Main /> : loading && !token ? <Spinner /> : <Login />}</>
}

export default App
