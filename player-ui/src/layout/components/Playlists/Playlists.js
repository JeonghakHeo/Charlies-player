import './Playlists.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaylistCover from '../PlaylistCover/PlaylistCover'
import { SET_PAUSE } from '../../../redux/constants/playerConstants'

import moment from 'moment'

const useStyle = makeStyles({
  active: {
    backgroundColor: '#2a2a2a',
    borderRadius: '5px',
  },
  play: {
    '&:hover': {
      transform: 'scale(105%)',
    },
    '&:active': {
      opacity: '0.8',
    },
  },
  icon: {
    '&:hover': {
      color: '#fff',
    },
  },
  iconButton: {
    '&:hover': {
      color: '#fff',
    },
  },
})

const Playlists = () => {
  const classes = useStyle()

  const dispatch = useDispatch()

  const playlist = useSelector((state) => state.playlist)
  const { playlistInfo, loading } = playlist

  const player = useSelector((state) => state.player)
  const { playerController, playerState } = player

  const tracks = playlistInfo?.tracks?.items?.slice(0, 12)

  const togglePlay = () => {
    playerController.togglePlay()
    if (playerState?.paused) {
      dispatch({ type: SET_PAUSE, payload: false })
    } else {
      dispatch({ type: SET_PAUSE, payload: true })
    }
  }

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000)
    const seconds = ((duration % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const formatDate = (addedAt) => {
    return moment.utc(addedAt).format('MMM D, YYYY')
  }

  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      {/* <Box sx={{ width: '100%' }}> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 40px 20px 40px',
        }}
      >
        <Grid container>
          <Grid item xs={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {playerState?.paused ? (
                <PlayCircleIcon
                  color='primary'
                  sx={{ fontSize: '70px' }}
                  className={classes.play}
                  onClick={togglePlay}
                />
              ) : (
                <PauseCircleIcon
                  color='primary'
                  sx={{ fontSize: '70px' }}
                  className={classes.play}
                  onClick={togglePlay}
                />
              )}

              <FavoriteIcon color='primary' sx={{ fontSize: '40px' }} />
              <ArrowCircleDownIcon
                color='secondary'
                sx={{ fontSize: '40px' }}
                className={classes.icon}
              />
              <MoreHorizIcon
                color='secondary'
                sx={{ fontSize: '40px' }}
                className={classes.icon}
              />
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alingItems: 'center',
              }}
            >
              <IconButton disableRipple>
                <SearchIcon color='secondary' className={classes.iconButton} />
              </IconButton>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <Select
                  value={value}
                  onChange={handleChange}
                  defaultValue='Placeholder'
                  displayEmpty
                >
                  <MenuItem value='title'>Title</MenuItem>
                  <MenuItem value='artist'>Artist</MenuItem>
                  <MenuItem value='album'>Album</MenuItem>
                  <MenuItem value='dataAdded'>Date added</MenuItem>
                  <MenuItem value='duration'>Duration</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: '',
          // position: 'sticky',
          // top: '0',
          marginBottom: '20px',
        }}
      >
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          sx={{ backgroundColor: '', padding: '10px 40px 0px 40px' }}
        >
          <Grid
            item
            xs={0.5}
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography
              variant='h3'
              component='h3'
              color='secondary'
              fontSize='20px'
            >
              #
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant='h3' component='h3' color='secondary'>
              TITLE
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h3' component='h3' color='secondary'>
              ALBUM
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h3' component='h3' color='secondary'>
              DATE ADDED
            </Typography>
          </Grid>
          <Grid item xs={0.5} sx={{ textAlign: 'center' }}>
            <Typography variant='h3' component='h3' color='secondary'>
              <AccessTimeIcon />
            </Typography>
          </Grid>
        </Grid>

        {/* divider */}
        <hr className='divider' style={{ width: '95%' }} />
      </Box>
      <Box
        sx={{
          backgroundColor: '',
        }}
      >
        {/* Each song */}
        <Box sx={{ padding: '0px 30px' }}>
          {!loading &&
            tracks?.map((track, index) => (
              <Box className='song' key={index}>
                <Grid
                  container
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{
                    '&:hover': {
                      backgroundColor: '#2a2a2a',
                      borderRadius: '5px',
                    },
                    padding: '20px 10px',
                  }}
                >
                  <Grid
                    item
                    xs={0.5}
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant='subtitle1'>{index + 1}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Box
                      sx={{
                        marginRight: '15px',
                        height: '50px',
                        width: '50px',
                        backgroundColor: 'purple',
                      }}
                    >
                      <PlaylistCover
                        image={track?.track?.album?.images[0]?.url}
                      />
                    </Box>
                    <Box sx={{ marginRight: '25px' }}>
                      <Typography variant='body1'>
                        {track?.track?.name}
                      </Typography>
                      <Typography variant='subtitle1'>Madeon, Kyan</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant='subtitle1'
                      noWrap
                      sx={{ marginRight: '15px' }}
                    >
                      {track?.track?.album?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant='subtitle1'>
                      {formatDate(track?.added_at)}
                    </Typography>
                  </Grid>
                  <Grid item xs={0.5} sx={{ textAlign: 'center' }}>
                    <Typography variant='subtitle1'>
                      {formatDuration(track?.track?.duration_ms)}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}

          {/* <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            sx={{
              padding: '20px 0px',
            }}
            className={classes.active}
          >
            <Grid
              item
              xs={0.5}
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography variant='subtitle1'>14</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant='body1'>Shake The Tree</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='subtitle1'>Shake The Tree</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='subtitle1'>Feb 11, 2019</Typography>
            </Grid>
            <Grid item xs={0.5} sx={{ textAlign: 'center' }}>
              <Typography variant='subtitle1'>3:03</Typography>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
      {/* </Box> */}
    </>
  )
}

export default Playlists
