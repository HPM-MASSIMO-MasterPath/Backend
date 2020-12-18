'use strict'

module.exports = function setup (ChallengesModel) {
  async function createOrUpdate (challenges) {
    const condition = {
      where: {
        id: challenges.id
      }
    }

    const existingCondition = await ChallengesModel.findOne(condition)
    if (existingCondition) {
      const update = await ChallengesModel.update(challenges, condition)
      return update ? ChallengesModel.findOne(condition) : existingCondition
    }
  }

  async function findById (id) {
    return await ChallengesModel.findOne({
      where: {
        id
      }
    })
  }

  return {
    createOrUpdate,
    findById
  }
}
