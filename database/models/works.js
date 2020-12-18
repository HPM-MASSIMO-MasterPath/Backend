'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('works', {
    url_repo: {
      type: Sequelize.STRING,
      allowNull: true
    },
    url_image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    comments: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
