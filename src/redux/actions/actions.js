import axios from 'axios'
import {
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAIL,
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAIL,
} from '../constants/actionConstants'

export const getPlaylistInfo = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PLAYLIST_REQUEST })

    const playlistId = '1H8NiwW6ogBH2bSfBKY0EN'
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

export const getArtistInfo = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTIST_REQUEST })

    const artistId = '1277747827'
    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(`/api/spotify/artist/${artistId}`, config)

    dispatch({ type: GET_ARTIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ARTIST_FAIL })
    console.log(error)
  }
}
