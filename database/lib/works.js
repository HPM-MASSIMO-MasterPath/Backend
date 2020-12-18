'use strict'

module.exports = function setup (WorksModel) {
  async function createOrUpdate (works) {
    const creation = await WorksModel.create(works)
    return creation
  }

  async function findById (id) {
    return await WorksModel.findOne({
      where: {
        id
      }
    })
  }

  return {
    createOrUpdate,
    findById
  }
}
