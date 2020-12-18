'use strict'

module.exports = function setup (SkillsCoursesModel) {
  async function createOrUpdate (skillsCourses) {
    const condition = {
      where: {
        id: skillsCourses.id
      }
    }

    const existingCondition = await SkillsCoursesModel.findOne(condition)
    if (existingCondition) {
      const update = await SkillsCoursesModel.update(skillsCourses, condition)
      return update ? SkillsCoursesModel.findOne(condition) : existingCondition
    }
  }

  async function findById (id) {
    return await SkillsCoursesModel.findOne({
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
