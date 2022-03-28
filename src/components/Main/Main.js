import React, { useState } from 'react'
import './Main.css'
import Spinner from '../../custom/Spinner'
import Navbar from '../Navbar/Navbar'
import PlaylistInfo from '../PlaylistInfo/PlaylistInfo'
import Playlists from '../Playlists/Playlists'
const Main = ({ token }) => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='playlist'>
          <header>
            <div className='navbar'>
              <Navbar />
            </div>
          </header>
          <div className='playlist-info'>
            <PlaylistInfo />
          </div>
          <div className='playlist-player'>
            <Playlists />
          </div>
        </div>
      )}
    </>
  )
}

export default Main
