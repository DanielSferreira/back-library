const router = require('express').Router()

router.get('/a', function (req, res) {
  res.send('Index Page')
})
router.get('/b', function (req, res) {
  res.send('Index Page')
})
module.exports = router
