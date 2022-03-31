import {
  SET_PLAYER_REQUEST,
  SET_PLAYER_SUCCESS,
  SET_PLAYER_FAIL,
  CONNECT_PLAYER_REQUEST,
  CONNECT_PLAYER_SUCCESS,
  CONNECT_PLAYER_FAIL,
  SET_TRACK,
  SET_PAUSE,
  SET_PLAYER_STATE,
  SET_ACTIVE,
} from '../constants/playerConstants'

const initialState = {
  loading: false,
  isConnected: false,
  player: {
    playerInfo: {},
    isPaused: true,
    isActive: false,
    currentTrack: {},
    playerState: {},
  },
}

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case SET_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: {
          ...state.player,
          playerInfo: action.payload,
        },
      }

    case CONNECT_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
        isConnected: false,
      }

    case CONNECT_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        isConnected: action.payload,
      }

    case SET_TRACK:
      return {
        ...state,
        player: {
          ...state.player,
          currentTrack: action.payload,
        },
      }

    case SET_PAUSE:
      return {
        ...state,
        player: {
          ...state.player,
          isPaused: action.payload,
        },
      }

    case SET_PLAYER_STATE:
      return {
        ...state,
        player: {
          ...state.player,
          playerState: action.payload,
        },
      }

    case SET_ACTIVE:
      return {
        ...state,
        player: {
          ...state.player,
          isActive: action.payload,
        },
      }
    default:
      return state
  }
}
