const express = require('express')
const app = express()
const PORT = process.env.PORT || 3008 


app.get('/', function (req, res) {
    res.send('Hello World')
})

  app.use(express.json())// req.body
  app.use((req, res, next) => {
    res.locals.data = {}
    next()
})



app.use('/api/blogs', require('./routes'))


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})