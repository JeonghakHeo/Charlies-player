import React, { useState } from 'react'
import './Main.css'
import Spinner from '../../utils/Spinner'
import Navbar from '../Navbar/Navbar'
import PlaylistInfo from '../PlaylistInfo/PlaylistInfo'
import Playlists from '../Playlists/Playlists'
import Player from '../Player/Player'

const Main = ({ token }) => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='playlist'>
            <div className='playlist-info'>
              <navbar className='navbar'>
                <Navbar />
              </navbar>
              <div className='playlist-details'>
                <PlaylistInfo />
              </div>
            </div>
            <div className='playlist-player'>
              <Playlists />
            </div>
            <div className='player'>
              <Player />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Main
