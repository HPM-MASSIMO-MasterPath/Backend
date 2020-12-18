'use strict'

module.exports = function setup (LearningPathModel) {
  async function createOrUpdate (learningPath) {
    const condition = {
      where: {
        id: learningPath.id
      }
    }

    const existingCondition = await LearningPathModel.findOne(condition)
    if (existingCondition) {
      const update = await LearningPathModel.update(learningPath, condition)
      return update ? LearningPathModel.findOne(condition) : existingCondition
    }
  }

  async function findById (id) {
    return await LearningPathModel.findOne({
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
