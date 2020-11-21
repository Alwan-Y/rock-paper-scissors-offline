import express from 'express'
import PostController from '../../controllers/PostController'

const router = express.Router()

router.get('/', PostController.getHomePageView)
router.get('/game', PostController.getGameView)

export default router
