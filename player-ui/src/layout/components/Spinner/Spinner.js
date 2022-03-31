import React from 'react'
import './Spinner.css'
import CircularProgress from '@mui/material/CircularProgress'

const Spinner = () => {
  return (
    <div className='spinner'>
      <CircularProgress
        sx={{
          color: 'rgb(158, 158, 158)',
        }}
      />
    </div>
  )
}

export default Spinner
