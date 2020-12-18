const express = require('express')
const router = express.Router()
const controller = require('./index')

const getOk = (req, res) => {
  try {
    res.send('OK')
  } catch (err) {
    res.send(err)
  }
}

router.get('/', getOk)

module.exports = router
