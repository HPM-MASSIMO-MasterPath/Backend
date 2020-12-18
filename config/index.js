'use strict'

require('dotenv').config()

module.exports = function config () {
  const config = {
    dev: process.env.NODE_ENV === 'production',
    database: process.env.name,
    username: process.env.user,
    password: process.env.pass,
    host: process.env.host,
    dialect: 'postgres',
    logging: s => debug(s)
  }

  if (process.env.NODE_ENV === 'production') {
    Object.assign(config, {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  }

  return config
}
