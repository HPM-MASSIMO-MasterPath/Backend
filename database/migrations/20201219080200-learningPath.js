'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'learningPaths',
        'complete',
        {
          type: Sequelize.BOOLEAN,
          allowNull: true
        }
      )
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('learningPaths', 'complete')
    ])
  }
}
