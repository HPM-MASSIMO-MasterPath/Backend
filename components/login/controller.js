'use strict'

const config = require('../../config/index')
const bcrypt = require('bcrypt')

module.exports = db => {
  const login = async (body) => {
    const { users } = await db(config())
    const user = body.username
    const pass = body.password
    let userFound
    userFound = await users.findByName(user)
    if (!userFound) {
      userFound = await users.findByEmail(user)
      if (!userFound) return 'unauthorized'
    }
    if (!await bcrypt.compare(pass, userFound.password)) {
      return 'unauthorized'
    }
    const { password, createdAt, updatedAt, ...userResult } = userFound
    return userResult
  }

  return {
    login
  }
}
