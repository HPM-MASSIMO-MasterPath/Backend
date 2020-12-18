'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setup (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
    url_avatar: {
      type: Sequelize.STRING,
      allowNull: true
    },
    type: {
      type: Sequelize.DataTypes.ENUM({
        values: [
          'student',
          'coach'
        ]
      }),
      allowNull: true
    }
  })
}
