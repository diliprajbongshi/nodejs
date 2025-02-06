require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const data = require('./data.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req, res) => {
  res.send('You tube')
})
app.get('/data', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})