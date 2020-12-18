'use strict'

module.exports = function setup (CategoriesModel) {
  async function createOrUpdate (categories) {
    const condition = {
      where: {
        id: categories.id
      }
    }

    const existingCondition = await CategoriesModel.findOne(condition)
    if (existingCondition) {
      const update = await CategoriesModel.update(categories, condition)
      return update ? CategoriesModel.findOne(condition) : existingCondition
    }
  }

  async function findById (id) {
    return await CategoriesModel.findOne({
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
