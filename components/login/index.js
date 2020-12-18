'use strict'

const db = require('../../config/index')
const controller = require('./controller')

module.exports = controller(db)
