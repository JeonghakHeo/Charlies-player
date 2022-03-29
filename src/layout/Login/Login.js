import './Login.css'
import Button from '@mui/material/Button'

const Login = () => {
  return (
    <div className='login'>
      <Button
        variant='contained'
        // onClick={getRedirectUrl}
        sx={{
          backgroundColor: '#1DB954',
          color: '#000',
          borderRadius: '500px',
          '&:hover': {
            backgroundColor: '#1ED760',
          },
        }}
      >
        Login with Spotify
      </Button>
    </div>
  )
}

export default Login
