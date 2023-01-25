const Router = require('express')
const router = new Router()
const searchController = require('../controllers/search.controller')
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, searchController.search)

module.exports = router