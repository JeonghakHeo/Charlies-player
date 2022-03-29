import React from 'react'
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

const Player = () => {
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
            backgroundColor: 'purple',
          }}
        >
          <PlaylistCover />
        </Box>
        <Box sx={{ marginRight: '25px' }}>
          <Typography variant='body2'>You're On (feat. Kyan)</Typography>
          <Typography variant='subtitle2'>Madeon, Kyan</Typography>
        </Box>
        <Box>
          <FavoriteBorderIcon color='secondary' />
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
            transform: 'translateX(24.5%)',
          }}
        >
          <ShuffleIcon color='primary' fontSize='medium' />
          <SkipPreviousIcon color='secondary' fontSize='large' />
          <PlayCircleIcon color='white' sx={{ fontSize: 45 }} />
          <SkipNextIcon color='secondary' fontSize='large' />
          <RepeatIcon color='primary' fontSize='medium' />
        </Box>

        <Box
          sx={{
            transform: 'translateX(-10%)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Typography variant='subtitle2'>1:16</Typography>
          <Slider
            defaultValue={50}
            color='secondary'
            size='small'
            sx={{ margin: '0 10px' }}
          />
          <Typography variant='subtitle2'>3:12</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '',
          padding: '20px',
          width: '30%',
          height: '50px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <QueueMusicIcon color='secondary' />
        <VolumeDownIcon color='secondary' />
        <Slider
          defaultValue={50}
          color='secondary'
          size='small'
          sx={{ margin: '0 10px' }}
        />
        <OpenInFullIcon color='secondary' size='small' />
      </Box>
    </>
  )
}

export default Player
