import express from 'express'
import {
  getPlaylist,
  getArtist,
  // getTopArtist,
  // setTrack,
  // updateShuffle,
  // updateRepeat,
} from '../controllers/spotifyController.js'

const router = express.Router()

router.route('/playlist/:id').get(getPlaylist)
router.route('/artist/:id').get(getArtist)
// router.route('/mytopartists').get(getTopArtist)
// router.route('/player/:deviceId').put(setTrack)
// router.route('/shuffle/:state').put(updateShuffle)
// router.route('/repeat/:state').put(updateRepeat)
export default router
