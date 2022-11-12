const express = require('express')
const router = express.Router()

const controller = require('../../controllers/api/categories.api.controller')

router.get('/index',controller.all)

module.exports = router;