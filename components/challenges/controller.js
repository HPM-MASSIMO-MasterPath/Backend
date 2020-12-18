'use strict'

const config = require('../../config/index')

module.exports = db => {
  const getChallenges = async id => {
    const { users } = await db(config())
    const user = await users.findById(id)
    return user
  }

  return {
    getChallenges
  }
}
