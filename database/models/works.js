'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('works', {
    url_repo: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    url_image: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    comments: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
