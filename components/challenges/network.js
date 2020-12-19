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

const getChallengesRandom = async (req, res) => {
  try {
    const challenges = await controller.challengeRandom()
    res.status(200).json({
      challenges
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

const getChallengesRandom1 = async (req, res) => {
  try {
    const challenges = await controller.challengeRandom1(req.params.id)
    res.status(200).json({
      challenges
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

router.get('/', getChallenges)
router.get('/id', getChallengesRandom)
router.get('/difficult/:id', getChallengesRandom1)
module.exports = router
