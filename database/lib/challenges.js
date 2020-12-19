'use strict'

module.exports = function setup (ChallengesModel) {
  async function createOrUpdate (challenges) {
    const creation = await ChallengesModel.create(challenges)
    return creation
  }

  async function findById (id) {
    return await ChallengesModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByIdB (difficulty) {
    return await ChallengesModel.findAll({
      where: {
        difficulty
      }
    })
  }
  return {
    createOrUpdate,
    findById,
    findByIdB
  }
}
