'use strict'

module.exports = function setup (LearningPathModel) {
  async function createOrUpdate (learningPath) {
    
    const creation = await LearningPathModel.create(learningPath)
    return creation
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
