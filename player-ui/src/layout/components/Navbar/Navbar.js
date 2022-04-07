import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ListIcon from '@mui/icons-material/List'
import { getPlaylistInfo, logout } from '../../../redux/actions/actions'

const Navbar = () => {
  const dispatch = useDispatch()

  const myProfile = useSelector((state) => state.myProfile)
  const { myProfileInfo } = myProfile

  const myPlaylists = useSelector((state) => state.myPlaylists)
  const { myPlaylistsInfo } = myPlaylists

  const playlist = useSelector((state) => state.playlist)
  const { playlistInfo } = playlist

  const [openMe, setOpenMe] = useState(false)
  const [openPlaylists, setOpenPlaylists] = useState(false)

  const handleMe = () => {
    setOpenMe(!openMe)
  }

  const handlePlaylists = () => {
    setOpenPlaylists(!openPlaylists)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleClick = (playlistId) => {
    dispatch(getPlaylistInfo(playlistId))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='transparent'
        sx={{ boxShadow: 'none', padding: '0px 20px' }}
      >
        <Toolbar sx={{ position: 'relative' }}>
          <IconButton
            size='small'
            edge='start'
            color='white'
            disableRipple
            sx={{ mr: 1, backgroundColor: '#1c3e3c' }}
            onClick={handlePlaylists}
          >
            <ListIcon fontSize='small' />
          </IconButton>

          <Typography
            variant='h2'
            noWrap
            component='div'
            color='white'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {playlistInfo?.name}
          </Typography>
          <Collapse in={openPlaylists} timeout='auto' unmountOnExit>
            <List
              disablePadding
              sx={{
                position: 'absolute',
                width: '200px',
                top: '55px',
                left: '20px',
                backgroundColor: '#282828',
                borderRadius: '3px',
              }}
            >
              <ListItem>
                {myPlaylistsInfo?.items.map((item) => (
                  <ListItemButton
                    key={item.id}
                    disableRipple
                    sx={{
                      borderRadius: '3px',
                      margin: '5px 5px',
                      '&:hover': {
                        backgroundColor: '#3e3e3e',
                      },
                    }}
                    onClick={() => handleClick(item.id)}
                  >
                    <Typography color='white' variant='body2'>
                      {item?.name}
                    </Typography>
                  </ListItemButton>
                ))}
              </ListItem>
            </List>
          </Collapse>
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
            onClick={handleMe}
          >
            <Avatar
              sx={{
                width: '30px',
                height: '30px',
                marginLeft: '2px',
                marginRight: '10px',
                backgroundColor: '#535353',
              }}
              src={myProfileInfo?.images[0]?.url}
            >
              {/* <PersonOutlineIcon fontSize='medium' /> */}
            </Avatar>
            <Typography variant='h4' textTransform='none' sx={{ mr: 0.5 }}>
              {myProfileInfo?.display_name}
            </Typography>
            {openMe ? (
              <ArrowDropUpIcon color='white' />
            ) : (
              <ArrowDropDownIcon color='white' />
            )}
          </Box>
          <Collapse in={openMe} timeout='auto' unmountOnExit>
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
