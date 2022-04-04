import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { playlistReducer, artistReducer } from './reducers/spotifyReducer'
import { playerReducer } from './reducers/playerReducer'

const reducer = combineReducers({
  player: playerReducer,
  playlist: playlistReducer,
  artist: artistReducer,
})

const initialState = {
  // token: localStorage.getItem('token')
  //   ? JSON.parse(localStorage.getItem('token'))
  //   : null,
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store