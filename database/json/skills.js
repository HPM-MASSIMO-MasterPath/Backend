const config = require('../../config/index')
const db = require('../index')

const run = async () => {
  try {
    const cat = [
      { name: 'Vue' },
      { name: 'React' },
      { name: 'Node' },
      { name: 'Java' },
      { name: 'Vue' },
      { name: 'Node' },
      { name: 'Python' },
      { name: 'Express' },
      { name: 'Express' },
      { name: 'Express' }
    ]
    const { skills } = await db(config())
    for (const element in cat) {
      const el = cat[element]
      const category = await skills.createOrUpdate({
        name: el.name
      })
      console.log(category)
      console.log('-----')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
