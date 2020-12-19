'use strict'

const config = require('../../config/index')

module.exports = db => {
  const getChallenges = async id => {
    const { users } = await db(config())
    const user = await users.findById(id)
    return user
  }

  const challengeRandom = async () => {
    const { challenges } = await db(config())
    let array = []
    const max = 400
    const min = 1
    const cycle = 10
    for (let i = 0; i < cycle; i++) {
      const idRandom = Math.floor((Math.random() * (max - min) + min))
      const challenge = await challenges.findById(idRandom)
      const { createdAt, updatedAt, ...arrayChallenge } = challenge
      array = array.concat(arrayChallenge)
    }
    return array
  }

  const challengeRandom1 = async (difficult) => {
    const { challenges } = await db(config())
    let array = []
    const challenge = await challenges.findByIdB(difficult)
    for (const elment in challenge) {
      const el = challenge[elment]
      const { createdAt, updatedAt, ...arrayChallenge } = el
      array = array.concat(arrayChallenge)
    }
    return array
  }

  const challengeRandom2 = async (id) => {
    const { challenges } = await db(config())
    const challenge = await challenges.findById(id)
    const { createdAt, updatedAt, ...arrayChallenge } = challenge
    return arrayChallenge
  }

  return {
    getChallenges,
    challengeRandom,
    challengeRandom1,
    challengeRandom2
  }
}
