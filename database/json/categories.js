const config = require('../../config/index')
const db = require('../index')

const run = async () => {
  try {
    const cat = [
      { category: 'Frontend' },
      { category: 'Backend' },
      { category: 'DataScience' }
    ]
    const { categories } = await db(config())
    for (const element in cat) {
      const el = cat[element]
      const category = await categories.createOrUpdate({
        category: el.category
      })
      console.log(category)
      console.log('-----')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
