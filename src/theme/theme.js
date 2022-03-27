import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#5e6161',
    },
    dark: {
      main: '#000',
    },
    white: {
      main: '#fff',
    },
  },
  typography: {
    h1: {
      color: '#fff',
      fontSize: '6.5rem',
      fontWeight: '800',
    },
    h2: {
      color: '#fff',
      fontSize: '1.25rem',
      fontWeight: '800',
    },
    h3: {
      color: '#fff',
      fontSize: '1rem',
      fontWeight: '800',
    },
    h4: {
      color: '#fff',
      fontSize: '0.8rem',
      fontWeight: '800',
    },
  },
})

export default theme
