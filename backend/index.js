const { connectToMongo } = require('./db'); 
var cors = require('cors')
connectToMongo();
const express = require('express');
const router = require('./routes/auth');
var app = express()
app.use(cors())
const port = 5000
app.use(express.json()) //middle wear
// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})