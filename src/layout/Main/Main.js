import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Main.css'
import Spinner from '../components/Spinner/Spinner'
import Navbar from '../components/Navbar/Navbar'
import PlaylistInfo from '../components/PlaylistInfo/PlaylistInfo'
import Playlists from '../components/Playlists/Playlists'
import Player from '../components/Player/Player'
import { getPlaylistInfo, getArtistInfo } from '../../redux/actions/actions'

const Main = ({ token }) => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaylistInfo())
    dispatch(getArtistInfo())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='playlist'>
            <div className='playlist-info'>
              <nav className='navbar'>
                <Navbar />
              </nav>
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
