const express = require('express')
const router = express.Router()
const controller = require('./index')

const addInfo = async (req, res) => {
  try {
    const path = await controller.addInfo(req.body)
    res.status(200).json({
      path
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

router.post('/', addInfo)

module.exports = router
