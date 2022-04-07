import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const CustomSnackbar = ({ like, unlike }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (like) {
      setOpen(like)
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    } else if (unlike) {
      setOpen(unlike)
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    }
  }, [like, unlike])

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        // autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        // onClose={handleClose}
      >
        <Alert
          variant='filled'
          severity='info'
          icon={false}
          sx={{
            margin: '0px 0px 80px 23px',
          }}
        >
          {like && 'Added to Liked Songs'}
          {unlike && 'Removed from Liked Songs'}
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}

export default CustomSnackbar
