const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', authMiddleware, userController.logout)
router.get('/refresh', authMiddleware, userController.refresh)
router.get('/activate/:link', userController.activate)
router.get('/validPassword',authMiddleware, userController.validPassword)
router.put('/changePassword', authMiddleware, userController.changePassword)
router.put('/rename', authMiddleware, userController.changeName)
router.put('/changeIsSuperAdmin', authMiddleware, userController.changeIsSuperAdmin)

module.exports = router