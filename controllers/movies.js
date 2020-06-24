const router = require('express').Router()

//GET - index
router.get('/', (req, res) => {
    res.send('send all movies')
})

//POST - add movie
router.post('/', (req, res) => {
    res.send('add movie')
})

//GET - /movies/:id - show 1 movie
router.get('/:id', (req, res) => {
    res.send('show 1 movie')
})

//PUT - /movies/:id - update 1 movie
router.put('/:id', (req, res) => {
    res.send('update 1 movie')
})

//DELETE - /movies/:id - delete 1 movie
router.delete('/:id', (req, res) => {
    res.send('delete 1 movie')
})

module.exports = router