'use strict'

module.exports = function setup (WorksModel) {
  async function createOrUpdate (works) {
    const condition = {
      where: {
        id: works.id
      }
    }

    const existingCondition = await WorksModel.findOne(condition)
    if (existingCondition) {
      const update = await WorksModel.update(works, condition)
      return update ? WorksModel.findOne(condition) : existingCondition
    }
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
