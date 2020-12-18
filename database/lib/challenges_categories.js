'use strict'

module.exports = function setup (ChallengesCategoriesModel) {
  async function createOrUpdate (challengesCategories) {
    const creation = await ChallengesCategoriesModel.create(challengesCategories)
    return creation
  }

  async function findById (id) {
    return await ChallengesCategoriesModel.findOne({
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
