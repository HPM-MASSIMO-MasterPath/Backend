const express = require('express')
const router = express.Router()
const controller = require('./index')

const getChallenges = (req, res) => {
  try {
    const challenges = controller.getChallenges()
    res.status(200).json({
      challenges
    })
  } catch (err) {
    res.send(err)
  }
}

router.get('/', getChallenges)

module.exports = router
