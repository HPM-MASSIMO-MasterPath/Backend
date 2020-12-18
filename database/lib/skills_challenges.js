'use strict'

module.exports = function setup (skillsChallengesModel) {
  async function createOrUpdate (skillsChallenges) {
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
