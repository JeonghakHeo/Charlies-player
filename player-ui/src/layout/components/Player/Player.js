import React, { useEffect, useState } from 'react'
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
import RepeatOneIcon from '@mui/icons-material/RepeatOne'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import {
  playSong,
  toggleShuffle,
  toggleRepeat,
} from '../../../redux/actions/actions'

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

  const dispatch = useDispatch()

  const player = useSelector((state) => state.player)
  const { playerController, playerState, currentTrack } = player

  const playlist = useSelector((state) => state.playlist)
  const { playlistInfo } = playlist

  const index = playlistInfo?.tracks?.items?.findIndex(
    (item) => item?.track?.id === currentTrack?.id
  )

  const [sliderPosition, setSliderPosition] = useState(
    Math.floor(playerState?.position / 1000)
  )

  const togglePlay = () => {
    playerController.togglePlay()
  }

  const playPreviousTrack = () => {
    setSliderPosition(0)
    playerController.previousTrack()
  }

  const playNextTrack = () => {
    setSliderPosition(0)
    playerController.nextTrack()
  }

  const updateShuffle = () => {
    dispatch(toggleShuffle())
  }

  const updateRepeat = () => {
    dispatch(toggleRepeat())
  }

  // 1. onMouseDown pause player
  // 2. setSliderPosition
  // 3. onMouseUp playSong(sliderPosition) & start timer
  const handleMouseDown = () => {
    playerController.pause()
  }

  const handlePosition = (e, newValue) => {
    setSliderPosition(newValue)
  }

  const handleMouseUp = () => {
    dispatch(playSong(playlistInfo?.id, index, sliderPosition))
  }

  useEffect(() => {
    setSliderPosition(Math.floor(playerState?.position / 1000))

    if (!playerState?.paused) {
      const timer = setInterval(() => {
        setSliderPosition((sliderPosition) => sliderPosition + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [playerState])

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
          <PlaylistCover image={currentTrack?.album?.images[0]?.url} />
        </Box>
        <Box sx={{ marginRight: '25px' }}>
          <Typography variant='body2'>{currentTrack?.name}</Typography>
          <Typography variant='subtitle2'>
            {currentTrack?.artists?.map((artist) => artist.name)}
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
            className={playerState?.shuffle ? classes.active : classes.icon}
            fontSize='medium'
            sx={{ mr: 1 }}
            onClick={updateShuffle}
          />
          <SkipPreviousIcon
            color='secondary'
            className={classes.icon}
            fontSize='large'
            sx={{ mr: 1 }}
            onClick={playPreviousTrack}
          />
          {playerState?.paused ? (
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
          {playerState?.repeat_mode === 0 ? (
            <RepeatIcon
              color='secondary'
              className={classes.icon}
              onClick={updateRepeat}
            />
          ) : playerState?.repeat_mode === 1 ? (
            <RepeatIcon
              color='secondary'
              className={classes.active}
              onClick={updateRepeat}
            />
          ) : (
            <RepeatOneIcon className={classes.active} onClick={updateRepeat} />
          )}
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
            {!playerState?.position
              ? '0:00'
              : formatDuration(sliderPosition * 1000)}
          </Typography>
          <Slider
            defaultValue={0}
            value={sliderPosition}
            max={Math.floor(parseInt(playerState?.duration / 1000))}
            // valueLabelDisplay='on'
            color='secondary'
            size='small'
            sx={{ margin: '0 10px' }}
            onMouseDown={handleMouseDown}
            onChange={handlePosition}
            onMouseUp={handleMouseUp}
          />
          <Typography variant='subtitle2'>
            {!playerState?.duration
              ? '0:00'
              : formatDuration(playerState?.duration)}
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
