const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')
const Kalender = require('../models/kalender')


router.get('/kalender', (req, res) => {
    console.log('kalender get req kommer in', Kalender)
    Kalender.find({}).then(function(poster){
        res.send(poster)
        //res.send({type: 'get rekvest'})

    })
  })


router.get('/ninjas', (req, res) => {
    console.log('get req kommer in')
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas)

    })
  })

router.post('/ninjas', (req, res) => {
    console.log('post req kommer in')
    console.log('req.body i POST', req.body)
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
        }
    )

})

router.put('/ninjas/:id', (req, res) => {
    console.log('put req kommer in')
    res.send({
        type: 'PUT'
    })})


router.delete('/ninjas/:id', (req, res) => {
        console.log('delete req kommer in')
        res.send({
            type: 'DELETE'
        })}) 

module.exports = router