const config = require('../../config/index')
const db = require('../index')

const run = async () => {
  try {
    const cat = [
      {
        name:
      'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
        url:
      'https://platzi.com/clases/introweb/',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso Definitivo de HTML y CSS',
        url:
      'https://platzi.com/clases/html-css/',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso Profesional de Git y GitHub',
        url:
      'https://platzi.com/clases/git-github/',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso Práctico de HTML y CSS',
        url:
      'https://platzi.com/clases/html-practico/',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso de Single Page Application con JavaScript Vanilla',
        url:
      'https://platzi.com/clases/spa-javascript/',
        category: 1,
        difficulty: 'hard'
      },
      {
        name: 'Curso de Optimización Web',
        url:
      'https://platzi.com/clases/web-performance/',
        category: 1,
        difficulty: 'medium'
      },
      {
        name: 'Curso de Webpack',
        url:
      'https://platzi.com/clases/webpack/',
        category: 1,
        difficulty: 'medium'
      },
      {
        name: 'Curso de React.js',
        url:
      'https://platzi.com/clases/react/',
        category: 1,
        difficulty: 'medium'
      },
      {
        name: 'Curso de React Avanzado',
        url:
      'https://platzi.com/clases/react-avanzado/',
        category: 1,
        difficulty: 'easy'
      },
      {
        name: 'Curso Profesional de React Hooks',
        url:
      'https://platzi.com/clases/react-hooks/',
        category: 1,
        difficulty: 'easy'
      },
      {
        name: 'Curso de Responsive Design: Maquetación Mobile First',
        url:
      'https://platzi.com/clases/mobile-first/',
        category: 1,
        difficulty: 'hard'
      },
      {
        name:
      'Curso de Introducción a la Web: Historia y Funcionamiento de Internet',
        url:
      'https://platzi.com/clases/introweb/',
        category: 1,
        difficulty: 'medium'
      }
    ]
    const { courses } = await db(config())
    for (const element in cat) {
      const el = cat[element]
      const category = await courses.createOrUpdate({
        name: el.name,
        url: el.url,
        difficulty: el.difficulty,
        categoryId: el.category

      })
      console.log(category)
      console.log('-----')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
