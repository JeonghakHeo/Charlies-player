import './Login.css'
import Button from '@mui/material/Button'

const getRedirectUrl = () => {
  console.log('click')
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

export default Login
