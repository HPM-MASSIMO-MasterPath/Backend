'use strict'

const db = require('../../database/index')
const controller = require('./controller')

module.exports = controller(db)
