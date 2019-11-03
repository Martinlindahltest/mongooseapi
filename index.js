const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


app = express()

mongoose.connect('mongodb://localhost/local')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(4000, () => {
    console.log('lyssnar på port 4000')
})