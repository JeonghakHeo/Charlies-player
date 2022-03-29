import React from 'react'
import Paper from '@mui/material/Paper'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const PlaylistCover = () => {
  return (
    <Paper elevation={5} sx={{ width: '100%', height: '100%' }}>
      <Card
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '0',
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
        }}
      >
        <CardMedia
          component='img'
          width='100%'
          height='100%'
          image='https://mosaic.scdn.co/640/ab67616d0000b27359032cbd1ca41576c3bb54feab67616d0000b2736ee651e65c3766d80e7fcab7ab67616d0000b273df757641bb992e0ce6423473ab67616d0000b273e8a627f6f15094b2eb0deba5'
        />
      </Card>
    </Paper>
  )
}

export default PlaylistCover
