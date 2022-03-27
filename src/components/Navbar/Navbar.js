import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Avatar } from '@mui/material'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='sticky'
        color='transparent'
        sx={{ boxShadow: 'none', paddingLeft: '20px', paddingRight: '20px' }}
      >
        <Toolbar>
          <IconButton
            size='small'
            edge='start'
            color='white'
            sx={{ mr: 2, backgroundColor: '#000', opacity: '0.5' }}
          >
            <ArrowBackIosNewIcon fontSize='small' />
          </IconButton>
          <IconButton
            size='small'
            edge='start'
            color='white'
            sx={{ mr: 2, backgroundColor: '#000', opacity: '0.5' }}
          >
            <ArrowForwardIosIcon fontSize='small' />
          </IconButton>
          <Typography
            variant='h2'
            noWrap
            component='div'
            color='white'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            I FEEL DEAM GOOD!
          </Typography>
          <Box
            sx={{
              width: '95px',
              height: '40px',
              backgroundColor: 'black',
              borderRadius: '35px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ width: '30px', height: '30px' }}>
              <PersonOutlineIcon fontSize='medium' />
            </Avatar>
            <Typography variant='h4' component='h4' textTransform='none'>
              Charlie
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
