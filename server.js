const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('This is an api used to register users')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
