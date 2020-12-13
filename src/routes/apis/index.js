import express from 'express'
import PostController from '../../controllers/PostController'
import AdminGameController from '../../controllers/adminController'
import UserGameController from '../../controllers/userGameController'
import UserGameBiodataController from '../../controllers/userBiodataController'
import UserGameHistoryController from '../../controllers/userGameHistoryController'

const router = express.Router()

router.get('/posts', PostController.get)
router.get('/compChoice', PostController.getCompChoice)
router.post('/posts', PostController.create)
router.delete('/posts/:id', PostController.delete)

router.get('/userGame', UserGameController.get)
router.get('/userGame/:username', UserGameController.getUserByUsername)
router.get('/userLogin', UserGameController.getUserLogin)
router.post('/userGame', UserGameController.create)
router.post('/userLoginCheck', UserGameController.loginCheck)
router.patch('/userGame/:username', UserGameController.update)
router.delete('/userGame/:id', UserGameController.delete)

router.post('/adminGame', AdminGameController.loginCheck)
router.get('/adminGame', AdminGameController.get)

router.get('/userGameBiodata', UserGameBiodataController.get)
router.post('/userGameBiodata', UserGameBiodataController.create)
router.patch('/userGameBiodata/:userGameId', UserGameBiodataController.update)
router.delete('/userGameBiodata/:id', UserGameBiodataController.delete)

router.get('/userGameHistory', UserGameHistoryController.get)
router.post('/userGameHistory', UserGameHistoryController.create)
router.get('/userGameHistory/:username', UserGameHistoryController.getByUsername)
router.patch('/userGameHistory/:id', UserGameHistoryController.update)
router.delete('/userGameHistory/:id', UserGameHistoryController.delete)

export default router
