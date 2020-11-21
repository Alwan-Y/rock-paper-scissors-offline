import express from 'express'
import PostController from '../../controllers/PostController'
import UserGameController from '../../controllers/userGameController'
import UserGameBiodataController from '../../controllers/userBiodataController/'
import UserGameHistoryController from '../../controllers'

const router = express.Router()

router.get('/posts', PostController.get)
router.get('/compChoice', PostController.getCompChoice)
router.post('/posts', PostController.create)
router.delete('/posts/:id', PostController.delete)

router.get('/userGame', UserGameController.get)
router.post('/userGame', UserGameController.create)
router.patch('/userGame/:id', UserGameController.update)
router.delete('/userGame/:id', UserGameController.delete)

router.get('/userGameBiodata', UserGameBiodataController.get)
router.post('/userGameBiodata', UserGameBiodataController.create)
router.patch('/userGameBiodata/:id', UserGameBiodataController.update)
router.delete('/userGameBiodata/:id', UserGameBiodataController.delete)

router.get('/userGameHistory',)


export default router
