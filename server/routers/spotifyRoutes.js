import express from 'express'
import {
  getMyProfile,
  getMyPlaylists,
  getPlaylist,
  getArtist,
  setTrack,
  updateShuffle,
  updateRepeat,
  // getTopArtist,
} from '../controllers/spotifyController.js'

const router = express.Router()

router.route('/myprofile').get(getMyProfile)
router.route('/myplaylists').get(getMyPlaylists)
router.route('/playlist/:id').get(getPlaylist)
router.route('/artist/:id').get(getArtist)
router.route('/player/:deviceId').put(setTrack)
router.route('/shuffle/:state').put(updateShuffle)
router.route('/repeat/:state').put(updateRepeat)
// router.route('/mytopartists').get(getTopArtist)
export default router
