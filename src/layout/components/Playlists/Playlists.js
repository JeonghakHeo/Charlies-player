import './Playlists.css'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

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

const data = [
  {
    id: 1,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 2,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 3,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 4,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 5,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 6,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 7,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 8,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 8,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
  {
    id: 9,
    title: 'Shake The Tree',
    album: 'Shake The Tree',
    dataAdded: 'Feb 11, 2019',
    duration: '3.03',
  },
]

const Playlists = () => {
  const classes = useStyle()

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
              <PlayCircleIcon
                color='primary'
                sx={{ fontSize: '70px' }}
                className={classes.play}
              />
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
          padding: '20px 40px 20px 40px',
        }}
      >
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          sx={{ backgroundColor: 'purple', padding: '10px' }}
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
        <hr className='divider' style={{ marginTop: '4px' }} />

        {/* Each song */}
        {data.map((info) => (
          <Box className='song'>
            <Grid
              key={info.id}
              container
              justifyContent='space-between'
              alignItems='center'
              sx={{
                // backgroundColor: '#2a2a2a',
                // borderRadius: '5px',
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
                <Typography variant='subtitle1'>{info.id}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='body1'>Shake The Tree</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='body1'>Shake The Tree</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1'>Feb 11, 2019</Typography>
              </Grid>
              <Grid item xs={0.5} sx={{ textAlign: 'center' }}>
                <Typography variant='subtitle1'>3:03</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}

        <Grid
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
        </Grid>
      </Box>

      {/* </Box> */}
    </>
  )
}

export default Playlists
