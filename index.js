/*------------- SETUP & MIDDLEWARE --------------*/
const express = require('express')
const app = express()

app.use('/', express.static('static'))
app.use(express.urlencoded({ extended: false }))

/*------------- ROUTES/CONTROLLERS --------------*/
app.use('/movies', require('./controllers/movies'))

//GET - Catch all/error
app.get('*', (req, res) => {
    res.send('error')
})

/*------------- PORT --------------*/
app.listen(3000)