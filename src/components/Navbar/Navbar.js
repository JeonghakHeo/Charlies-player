import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
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
        color='transparent'
        sx={{ boxShadow: 'none', padding: '0px 20px' }}
      >
        <Toolbar>
          <IconButton
            size='small'
            edge='start'
            color='white'
            sx={{ mr: 2, backgroundColor: '#1c3e3c' }}
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
              width: '105px',
              height: '35px',
              backgroundColor: '#1c3e3c',
              borderRadius: '35px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                width: '30px',
                height: '30px',
                marginLeft: '2px',
                marginRight: '10px',
                backgroundColor: '#535353',
              }}
            >
              <PersonOutlineIcon fontSize='medium' />
            </Avatar>
            <Typography variant='h4' textTransform='none'>
              Charlie
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
