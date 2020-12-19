const express = require('express')
const router = express.Router()
const controller = require('./index')

const getOk = async (req, res) => {
  try {
    const result = await controller.login(req.body) 
    res.status(200).json(result)
  } catch (err) {
    res.status(400).send(err)
  }
}

router.get('/', getOk)

module.exports = router
