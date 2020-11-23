import express from 'express'
import PageController from '../../controllers/pageController'

const router = express.Router()

router.get('/', PageController.getHomePageView)
router.get('/game', PageController.getGameView)
router.get('/choiceLogin', PageController.getChoiceLoginPage)
router.get('/loginUser', PageController.getLoginUser)
router.get('/dashboard', PageController.getDashboard)
router.get('/createUser', PageController.getCreateUser)
router.get('/loginAdmin', PageController.getLoginAdmin)
router.get('/createUserBiodata', PageController.getCreateUserBiodata)
router.get('/updatePassword', PageController.getUpdatePassword)
router.get('/updateBiodata', PageController.getUpdateUserBiodata)

export default router
