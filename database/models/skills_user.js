'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('skills_user', {
    expertise: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
