'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('challenges', {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    url_image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    output: {
      type: Sequelize.STRING,
      allowNull: true
    },
    url_resources: {
      type: Sequelize.STRING,
      allowNull: true
    },
    difficulty: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
