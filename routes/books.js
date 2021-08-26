const router = require('express').Router()

router.get('/', function (req, res) {
  res.send(['a', 'b', 'C'])
})

router.get('/listar', function (req, res) {
  res.send([{ nome: 'a' }, { nome: 'b' }])
})

router.get('/:id', function (req, res) {
  res.send(req.params.id)
})

module.exports = router
