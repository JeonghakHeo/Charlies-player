import './App.css'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Main from './layout/Main/Main'
import Login from './layout/Login/Login'
import Spinner from './layout/components/Spinner/Spinner'
import axios from 'axios'
const App = () => {
  const [token, setToken] = useState(null)
  const loading = false
  const params = new URLSearchParams(window.location.search)

  const getToken = async () => {
    try {
      const data = await axios.get(
        `http://localhost:5000/api/auth/callback?code=${params.get(
          'code'
        )}&state=${params.get('state')}`
      )
      setToken(data?.data?.access_token)
      localStorage.setItem('token', JSON.stringify(data?.data?.access_token))
    } catch (error) {
      console.log(error)
    }
  }

  if (!token && params.has('code') && params.has('state')) {
    getToken()
  }

  const getRedirectUrl = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/auth/login')
      window.location.replace(data.redirectUrl)
    } catch (error) {
      console.log(error)
    }
  }

  const Login = () => {
    return (
      <div className='login'>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#1DB954',
            color: '#000',
            borderRadius: '500px',
            '&:hover': {
              backgroundColor: '#1ED760',
            },
          }}
          onClick={getRedirectUrl}
        >
          Login with Spotify
        </Button>
      </div>
    )
  }

  useEffect(() => {
    // connect player
  })

  return (
    <>
      {token || JSON.parse(localStorage.getItem('token')) ? (
        <Main token={token} />
      ) : loading && !token ? (
        <Spinner />
      ) : (
        <Login />
      )}
    </>
  )
}

export default App
