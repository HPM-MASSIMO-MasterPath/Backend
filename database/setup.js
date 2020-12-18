'use strict'

const db = require('./index')
const config = require('../config/index')

const setup = async () => {
  try {
    await db(config())
    console.log(`[Database]: connected success`)
  } catch (err) {
    console.error(err)
  }
}

setup()
