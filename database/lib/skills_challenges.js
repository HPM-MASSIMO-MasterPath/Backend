'use strict'

module.exports = function setup (skillsChallengesModel) {
  async function createOrUpdate (skillsChallenges) {
    const condition = {
      where: {
        id: skillsChallenges.id
      }
    }

    const existingCondition = await skillsChallengesModel.findOne(condition)
    if (existingCondition) {
      const update = await skillsChallengesModel.update(skillsChallenges, condition)
      return update ? skillsChallengesModel.findOne(condition) : existingCondition
    }
    const creation = await skillsChallengesModel.create(skillsChallenges)
    return creation
  }

  async function findById (id) {
    return await skillsChallengesModel.findOne({
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
