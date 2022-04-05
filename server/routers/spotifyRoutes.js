import express from 'express'
import {
  getMyProfile,
  getMyPlaylists,
  getPlaylist,
  getArtist,
  setTrack,
  setVolume,
  updateShuffle,
  updateRepeat,
} from '../controllers/spotifyController.js'

const router = express.Router()

router.route('/myprofile').get(getMyProfile)
router.route('/myplaylists').get(getMyPlaylists)
router.route('/playlist/:id').get(getPlaylist)
router.route('/artist/:id').get(getArtist)
router.route('/player/track/:deviceId').put(setTrack)
router.route('/player/volume/:deviceId').put(setVolume)
router.route('/shuffle/:state').put(updateShuffle)
router.route('/repeat/:state').put(updateRepeat)
export default router
