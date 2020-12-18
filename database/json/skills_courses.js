const config = require('../../config/index')
const db = require('../index')

const run = async () => {
  try {
    const cat = [
      { id_course: 1, id_skill: 1 },
      { id_course: 2, id_skill: 2 },
      { id_course: 3, id_skill: 3 },
      { id_course: 4, id_skill: 4 },
      { id_course: 5, id_skill: 5 },
      { id_course: 6, id_skill: 6 },
      { id_course: 7, id_skill: 7 },
      { id_course: 8, id_skill: 8 },
      { id_course: 9, id_skill: 9 },
      { id_course: 10, id_skill: 10 }
    ]
    const { skillsCourses } = await db(config())
    for (const element in cat) {
      const el = cat[element]
      const category = await skillsCourses.createOrUpdate({
        courseId: el.id_course,
        skillId: el.id_skill
      })
      console.log(category)
      console.log('-----')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
