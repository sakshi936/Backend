const express = require('express'); // equivalent to -> // import express from 'express'; 
// import express from 'express'; 
const app = express()   // app is express variable that can access all the methods & features of express
const port = 3000       // request will be listen on the server , server needs port to listen  // it canbe 4000

app.get('/', (req, res) => {    // app.get '/'-home route request, response ('Hello World!')
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {   // get '/twitter' request
  res.send('Hello twitter World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})