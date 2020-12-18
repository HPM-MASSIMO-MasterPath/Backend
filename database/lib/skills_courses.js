'use strict'

module.exports = function setup (SkillsCoursesModel) {
  async function createOrUpdate (skillsCourses) {
    const creation = await SkillsCoursesModel.create(skillsCourses)
    return creation
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
