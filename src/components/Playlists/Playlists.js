import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Playlists = () => {
  const [age, setAge] = useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
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
                <PlayCircleIcon color='primary' sx={{ fontSize: '70px' }} />
                <FavoriteIcon color='primary' sx={{ fontSize: '40px' }} />
                <ArrowCircleDownIcon color='white' sx={{ fontSize: '40px' }} />
                <MoreHorizIcon color='secondary' sx={{ fontSize: '40px' }} />
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-start',
                  alingItems: 'center',
                }}
              >
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Album</InputLabel>
                  <Select value={age} onChange={handleChange} displayEmpty>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <IconButton>
                  <SearchIcon color='white' />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ backgroundColor: '', padding: '20px 40px 20px 40px' }}>
          {/* <Box style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
            autem alias consequuntur voluptatem. Dolore commodi ipsum dolor
            aliquam eos ipsa enim suscipit beatae quam!
          </p>
          <p>
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem!
          </p>
        </Box>
        <div className='asd'>
          <a href='#home' class='active'>
            Home
          </a>
          <a href='#news'>News</a>
          <a href='#contact'>Contact</a>
        </div>
      </Box>
    </>
  )
}

export default Playlists
