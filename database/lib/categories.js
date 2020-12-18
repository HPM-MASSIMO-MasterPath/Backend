'use strict'

module.exports = function setup (CategoriesModel) {
  async function createOrUpdate (categories) {
    const condition = {
      where: {
        category: categories.category
      }
    }

    const existingCondition = await CategoriesModel.findOne(condition)
    if (existingCondition) {
      const update = await CategoriesModel.update(categories, condition)
      return update ? CategoriesModel.findOne(condition) : existingCondition
    }
    const creation = await CategoriesModel.create(categories)
    return creation
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
