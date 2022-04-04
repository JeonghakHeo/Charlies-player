import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { logout } from '../../../redux/actions/actions'

const Navbar = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const handleList = () => {
    setOpen(!open)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

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
            disableRipple
            sx={{ mr: 2, backgroundColor: '#1c3e3c' }}
          >
            <ArrowBackIosNewIcon fontSize='small' />
          </IconButton>
          <IconButton
            size='small'
            edge='start'
            color='white'
            disableRipple
            sx={{ mr: 2, backgroundColor: '#1c3e3c' }}
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
              width: '118px',
              height: '35px',
              backgroundColor: '#1c3e3c',
              borderRadius: '35px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              position: 'relative',
              '&:hover': {
                backgroundColor: '#282828',
              },
            }}
            onClick={handleList}
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
            <Typography variant='h4' textTransform='none' sx={{ mr: 0.5 }}>
              Charlie
            </Typography>
            {open ? (
              <ArrowDropUpIcon color='white' />
            ) : (
              <ArrowDropDownIcon color='white' />
            )}
          </Box>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List
              disablePadding
              sx={{
                position: 'absolute',
                width: '180px',
                top: '55px',
                right: '25px',
                backgroundColor: '#282828',
                borderRadius: '3px',
              }}
            >
              <ListItem
                sx={{
                  borderRadius: '3px',
                  margin: '5px 5px',
                  '&:hover': {
                    backgroundColor: '#3e3e3e',
                  },
                }}
              >
                <ListItemButton onClick={handleLogout} disableRipple>
                  <Typography color='white' variant='body2'>
                    Log out
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
