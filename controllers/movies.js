const router = require('express').Router()
const db = require('../models')

//GET - index
router.get('/', (req, res) => {

    db.movie.findAll()
    .then(movies => {
        res.send(movies)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('internal server error')
    })

    // res.send('send all movies')
})

//POST - add movie
router.post('/', (req, res) => {
 
    db.movie.findOrCreate({
        where: {
            title: req.body.title
        },
        defaults: {
            year: req.body.year,
            famous_line: req.body.famous_line
        }
    })
    .then(movie => {
        res.send(movie)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('internal server error')
    })
    // res.send('add movie')

})

//GET - /movies/:id - show 1 movie
router.get('/:id', (req, res) => {
    
    db.movie.findOne({
        id: req.params.id
    })
    .then(movie => {
        res.send(movie)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('internal server error')
    })
    
    // res.send('show 1 movie')
})

//PUT - /movies/:id - update 1 movie
router.put('/:id', (req, res) => {

    db.movie.update(
        req.body, 
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(updated => {
        
        console.log(updated)

        db.movie.findByPk(req.params.id)
        .then(movie => {
            res.send('movie updated', movie)
        })
        .catch(err => {
            console.log('error finding updated movie', err)
            res.status(500).send('internal server error, error ')
        })
    })
    .catch(err => {
        console.log('error updating movie', err)
        res.status(500).send('internal server error')
    })
    
    // res.send('update 1 movie')
})

//DELETE - /movies/:id - delete 1 movie
router.delete('/:id', (req, res) => {
    
    db.movie.destroy({
        where: {id: req.params.id}
    })
    .then(deleted => {
        console.log(deleted)
        res.send('movie deleted')
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('internal server error')
    })
    
    // res.send('delete 1 movie')
})

module.exports = router