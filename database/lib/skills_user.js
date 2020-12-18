'use strict'

module.exports = function setup (SkillsUserModel) {
  async function createOrUpdate (skillsUser) {
    const condition = {
      where: {
        id: skillsUser.id
      }
    }

    const existingCondition = await SkillsUserModel.findOne(condition)
    if (existingCondition) {
      const update = await SkillsUserModel.update(skillsUser, condition)
      return update ? SkillsUserModel.findOne(condition) : existingCondition
    }
  }

  async function findById (id) {
    return await SkillsUserModel.findOne({
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
