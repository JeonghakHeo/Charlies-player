import axios from 'axios'
import {
  GET_MY_PLAYLISTS_REQUEST,
  GET_MY_PLAYLISTS_FAIL,
  GET_MY_PLAYLISTS_SUCCESS,
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAIL,
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAIL,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAIL,
} from '../constants/spotifyConstants'
import {
  PLAY_SONG_REQUEST,
  PLAY_SONG_SUCCESS,
  PLAY_SONG_FAIL,
  LOG_OUT,
} from '../constants/playerConstants'

export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MY_PROFILE_REQUEST })

    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get('/api/spotify/myprofile', config)

    dispatch({ type: GET_MY_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_MY_PROFILE_FAIL })
    console.log(error)
  }
}

export const getMyPlaylists = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MY_PLAYLISTS_REQUEST })

    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get('/api/spotify/myplaylists', config)

    dispatch({ type: GET_MY_PLAYLISTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_MY_PLAYLISTS_FAIL })
    console.log(error)
  }
}

export const getPlaylistInfo =
  (playlistId = '1H8NiwW6ogBH2bSfBKY0EN') =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_PLAYLIST_REQUEST })

      const token = JSON.parse(localStorage.getItem('token'))

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.get(
        `/api/spotify/playlist/${playlistId}`,
        config
      )

      dispatch({ type: GET_PLAYLIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_PLAYLIST_FAIL })
      console.log(error)
    }
  }

export const getArtistInfo =
  (artistId = '1277747827') =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ARTIST_REQUEST })

      const token = JSON.parse(localStorage.getItem('token'))

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.get(
        `/api/spotify/artist/${artistId}`,
        config
      )

      dispatch({ type: GET_ARTIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_ARTIST_FAIL })
      console.log(error)
    }
  }

export const playSong =
  (playlistId = '1H8NiwW6ogBH2bSfBKY0EN', position = 0, positionMs = 0) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PLAY_SONG_REQUEST })

      const token = JSON.parse(localStorage.getItem('token'))
      const deviceId = JSON.parse(localStorage.getItem('deviceId'))
      const { playlistInfo } = getState().playlist

      const playlistId = playlistInfo.id

      const body = {
        context_uri: `spotify:playlist:${playlistId}`,
        offset: {
          position: position,
        },
        position_ms: positionMs * 1000,
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }

      await axios.put(`/api/spotify/player/${deviceId}`, body, config)

      dispatch({ type: PLAY_SONG_SUCCESS })
    } catch (error) {
      dispatch({ type: PLAY_SONG_FAIL })
      console.log(error)
    }
  }

export const logout = () => async (dispatch, getState) => {
  try {
    const { playerController } = getState().player

    playerController.disconnect()
    localStorage.removeItem('token')
    localStorage.removeItem('deviceId')

    window.location.reload()
    dispatch({ type: LOG_OUT })
  } catch (error) {
    console.log(error)
  }
}

// **************************************************************** //

export const toggleShuffle = () => async (dispatch, getState) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const { playerState } = getState().player

    console.log(playerState.shuffle)

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    // }

    // if (isShuffle === false) {
    //   const { data } = await axios.put(
    //     `/api/spotify/shuffle/${!isShuffle}`,
    //     {},
    //     config
    //   )
    //   dispatch({ type: TOGGLE_SHUFFLE_SUCCESS, payload: data })
    // }

    // if (isShuffle === true) {
    //   const { data } = await axios.put(
    //     `/api/spotify/shuffle/${!isShuffle}`,
    //     {},
    //     config
    //   )
    //   dispatch({ type: TOGGLE_SHUFFLE_SUCCESS, payload: data })
    // }
  } catch (error) {
    // dispatch({ type: TOGGLE_SHUFFLE_FAIL, payload: error })
    // console.log(error)
  }
}
