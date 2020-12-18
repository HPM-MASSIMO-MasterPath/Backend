const express = require('express')
const cors = require('cors')

const app = express()

const router = require('./routes/routes')
const config = require('./config')

const { portServer } = config()

app.use(cors())
app.use(express.json())

// Routes
router(app)

app.listen(portServer, () => {
  console.log(`Listening on: http://localhost:${portServer}`)
})
