const express = require('express')
const router = express.Router()
const controller = require('./index')

const getPath = async (req, res) => {
  try {
    const path = await controller.getPath()
    res.status(200).json({
      path
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

router.get('/', getPath)

module.exports = router
