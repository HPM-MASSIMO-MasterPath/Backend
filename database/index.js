'use strict'

const setupDatabase = require('./lib/db')

const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'postgres',
    pools: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)

  await sequelize.authenticate()

  await sequelize.sync()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  return {

  }
}
