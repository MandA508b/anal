const Router = require('express')
const router = new Router()
const userRouter = require('./user.router')
const searchRouter = require('./search.router')

router.use('/user', userRouter)
router.use('/search', searchRouter)

module.exports = router