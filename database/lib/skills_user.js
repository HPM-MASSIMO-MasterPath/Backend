'use strict'

module.exports = function setup (SkillsUserModel) {
  async function createOrUpdate (skillsUser) {
    const creation = await SkillsUserModel.create(skillsUser)
    return creation
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
