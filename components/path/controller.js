'use strict'

const config = require('../../config/index')

module.exports = db => {
  const getPath = async () => {
    const id = 6
    const { users, learningPath, courses, categories } = await db(config())
    const user = await users.findById(id)
    const lp = await learningPath.findByUserById(user.id)
    let course = []
    for (const element in lp) {
      const el = lp[element]
      const { courseId } = el
      const courseFound = await courses.findById(courseId)
      const cat = await categories.findById(courseFound.categoryId)
      const { category } = cat
      courseFound.categoryId = category
      const { id, createdAt, updatedAt, ...courseCp } = courseFound
      course = course.concat(courseCp)
    }
    console.log(course)
    return course
  }

  return {
    getPath
  }
}
