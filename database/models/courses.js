'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('courses', {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    url: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    difficulty: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
