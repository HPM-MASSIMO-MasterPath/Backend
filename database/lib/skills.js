'use strict'

module.exports = function setup (SkillsModel) {
  async function createOrUpdate (skills) {
    const condition = {
      where: {
        id: skills.id
      }
    }

    const existingCondition = await SkillsModel.findOne(condition)
    if (existingCondition) {
      const update = await SkillsModel.update(skills, condition)
      return update ? SkillsModel.findOne(condition) : existingCondition
    }
    const creation = await SkillsModel.create(skills)
    return creation
  }

  async function findById (id) {
    return await SkillsModel.findOne({
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
