const router = require('express').Router()
const Lotscontoller = require('../controllers/lots')

router.get('/check', Lotscontoller.checkLots)
router.post('/update', Lotscontoller.updateLots)

module.exports = router