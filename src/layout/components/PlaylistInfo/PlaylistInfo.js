import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PlaylistCover from '../PlaylistCover/PlaylistCover'
import logo from './logo.png'

const PlaylistDescription = () => {
  return (
    <>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={2} sx={{ width: '100%' }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <PlaylistCover />
          </Box>
        </Grid>

        <Grid container item xs={10}>
          <Box
            sx={{
              width: '100%',
              padding: '30px 30px 0px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Typography variant='h4'>PUBLIC PLAYLIST</Typography>

            <Typography variant='h1' component='h1'>
              I FEEL DEAM GOOD!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={logo}
                sx={{ width: '30px', height: '30px', marginRight: '5px' }}
              />
              <Typography variant='h4'>
                Mellisa Gutierrez{' '}
                <span style={{ fontWeight: 'normal' }}>
                  • 51 likes • 236 songs,{' '}
                </span>
                <span style={{ color: '#b2b2b2', fontWeight: 'normal' }}>
                  14 hr 1 min
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default PlaylistDescription
