import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AlbumCover from '../PlaylistCover/PlaylistCover'
import logo from './logo.png'

const PlaylistDescription = () => {
  return (
    <>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={2} sx={{ width: '100%' }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <AlbumCover />
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
            <Typography variant='h4' component='h4'>
              PUBLIC PLAYLIST
            </Typography>

            <Typography variant='h1' component='h1'>
              I FEEL DEAM GOOD!
            </Typography>
            <Typography variant='h4' component='h4'>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={logo}
                  sx={{ width: '30px', height: '30px', marginRight: '5px' }}
                />
                Mellisa Gutierrez • 51 likes • 236 songs, 14h 1m
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default PlaylistDescription
