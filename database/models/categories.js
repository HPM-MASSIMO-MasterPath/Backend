'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('categories', {
    category: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lenguage: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
