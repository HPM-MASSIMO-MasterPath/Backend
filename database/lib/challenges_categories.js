'use strict'

module.exports = function setup (ChallengesCategoriesModel) {
  async function createOrUpdate (challengesCategories) {
    const condition = {
      where: {
        id: challengesCategories.id
      }
    }

    const existingCondition = await ChallengesCategoriesModel.findOne(condition)
    if (existingCondition) {
      const update = await ChallengesCategoriesModel.update(challengesCategories, condition)
      return update ? ChallengesCategoriesModel.findOne(condition) : existingCondition
    }
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
