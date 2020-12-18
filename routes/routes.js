const login = require('../components/login/network')
const path = require('../components/path/network')

const routes = app => {
  app.use('/api/login', login)
  app.use('/path', path)
}

module.exports = routes
