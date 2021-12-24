const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set('port', 3000)

app.get('/', (req, res) => {
    res.end()
})

app.post('/contact', (req, res) => {

})

app.listen(app.get('port'), () => {
    console.log(`Application listening through port ${app.get('port')}`)
})