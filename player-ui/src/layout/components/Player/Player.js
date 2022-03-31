import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlaylistCover from '../PlaylistCover/PlaylistCover'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import RepeatIcon from '@mui/icons-material/Repeat'
import MenuIcon from '@mui/icons-material/Menu'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import { SET_PAUSE } from '../../../redux/constants/playerConstants'

const useStyle = makeStyles({
  play: {
    '&:hover': {
      transform: 'scale(105%)',
    },
  },
  icon: {
    '&:hover': {
      color: '#fff',
    },
  },
  active: {
    color: '#1DB954',
  },
})

const Player = () => {
  const classes = useStyle()

  const player = useSelector((state) => state.player)
  const { playerController, playerState, currentTrack, isPaused } =
    player.player

  const dispatch = useDispatch()

  const togglePlay = () => {
    playerController.togglePlay()
    if (isPaused) {
      dispatch({ type: SET_PAUSE, payload: false })
    } else {
      dispatch({ type: SET_PAUSE, payload: true })
    }
  }

  const playPreviousTrack = () => {
    playerController.previousTrack()
  }

  const playNextTrack = () => {
    playerController.nextTrack()
  }

  const toggleShuffle = () => {
    // dispatch({type: SET_SHUFFLE })
    console.log('shuffle')
  }

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000)
    const seconds = ((duration % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <>
      <Box
        sx={{
          padding: '20px',
          width: '30%',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginRight: '15px',
            height: '60px',
            width: '60px',
            backgroundColor: '',
          }}
        >
          <PlaylistCover image={currentTrack?.album.images[0]?.url} />
        </Box>
        <Box sx={{ marginRight: '25px' }}>
          <Typography variant='body2'>{currentTrack?.name}</Typography>
          <Typography variant='subtitle2'>
            {currentTrack?.artists.map((artist) => artist.name)}
          </Typography>
        </Box>
        <Box>
          <FavoriteBorderIcon color='secondary' className={classes.icon} />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '',
          padding: '20px',
          width: '40%',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            transform: 'translateX(21%)',
          }}
        >
          <ShuffleIcon
            color='secondary'
            className={classes.icon}
            fontSize='medium'
            sx={{ mr: 1 }}
            onClick={toggleShuffle}
          />
          <SkipPreviousIcon
            color='secondary'
            className={classes.icon}
            fontSize='large'
            sx={{ mr: 1 }}
            onClick={playPreviousTrack}
          />
          {isPaused ? (
            <PlayCircleIcon
              color='white'
              className={classes.play}
              sx={{
                fontSize: 45,
                mr: 1,
              }}
              onClick={togglePlay}
            />
          ) : (
            <PauseCircleIcon
              color='white'
              className={classes.play}
              sx={{
                fontSize: 45,
                mr: 1,
                '&:hover': {
                  transform: 'scale(105%)',
                },
              }}
              onClick={togglePlay}
            />
          )}
          <SkipNextIcon
            color='secondary'
            className={classes.icon}
            fontSize='large'
            sx={{ mr: 1 }}
            onClick={playNextTrack}
          />
          <RepeatIcon
            color='secondary'
            className={classes.icon}
            fontSize='medium'
          />
        </Box>

        <Box
          sx={{
            transform: 'translateX(-10%)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Typography variant='subtitle2'>
            {formatDuration(playerState.position)}
          </Typography>
          <Slider
            defaultValue={50}
            color='secondary'
            size='small'
            sx={{ margin: '0 10px' }}
          />
          <Typography variant='subtitle2'>
            {formatDuration(playerState.duration - playerState.position)}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '',
          padding: '20px 40px 20px 20px',
          width: '30%',
          height: '50px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <QueueMusicIcon
          color='secondary'
          className={classes.icon}
          sx={{ mr: 1 }}
        />
        <VolumeDownIcon color='secondary' className={classes.icon} />
        <Slider
          defaultValue={50}
          color='secondary'
          size='small'
          sx={{ margin: '0 10px', width: '20%' }}
        />
        <OpenInFullIcon
          color='secondary'
          size='small'
          className={classes.icon}
        />
      </Box>
    </>
  )
}

export default Player
