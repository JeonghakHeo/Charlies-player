import React, { useState } from 'react'
import './Main.css'
import Spinner from '../../utils/Spinner'
import Navbar from '../components/Navbar/Navbar'
import PlaylistInfo from '../components/PlaylistInfo/PlaylistInfo'
import Playlists from '../components/Playlists/Playlists'
import Player from '../components/Player/Player'

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
              <hr
                className='divider'
                style={{
                  position: 'absolute',
                  top: '0px',
                  transform: 'translate(-20px, -9px)',
                }}
              />
              <Player />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Main
