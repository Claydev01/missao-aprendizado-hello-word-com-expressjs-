const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Endpoint /oi -> Olá, mundo!

app.get('/oi', function (req, res){
  res.send('Olá,Mundo')
})
app.listen(3000)