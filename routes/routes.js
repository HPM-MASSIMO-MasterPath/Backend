const login = require('../components/login/network')
const path = require('../components/path/network')
const challenge = require('../components/challenges/network')

const routes = app => {
  app.use('/api/login', login)
  app.use('/path', path)
  app.use('/challenge', challenge)
}

module.exports = routes
