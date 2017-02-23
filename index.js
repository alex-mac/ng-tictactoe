'use strict';

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Serving up your things to do on port: ${port}`)
})
