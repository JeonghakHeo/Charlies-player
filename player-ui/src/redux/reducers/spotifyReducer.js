import {
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAIL,
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAIL,
} from '../constants/spotifyConstants'

export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYLIST_REQUEST:
      return {
        loading: true,
      }

    case GET_PLAYLIST_SUCCESS:
      return {
        loading: false,
        playlistInfo: action.payload,
      }

    case GET_PLAYLIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const artistReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ARTIST_REQUEST:
      return {
        loading: true,
      }

    case GET_ARTIST_SUCCESS:
      return {
        loading: false,
        artistInfo: action.payload,
      }

    case GET_ARTIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
