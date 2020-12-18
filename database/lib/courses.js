'use strict'

module.exports = function setup (CoursesModel) {
  async function createOrUpdate (courses) {
    const condition = {
      where: {
        id: courses.id
      }
    }

    const existingCondition = await CoursesModel.findOne(condition)
    if (existingCondition) {
      const update = await CoursesModel.update(courses, condition)
      return update ? CoursesModel.findOne(condition) : existingCondition
    }
    const creation = await CoursesModel.create(courses)
    return creation

  }

  async function findById (id) {
    return await CoursesModel.findOne({
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
