'use strict'

module.exports = function setup (LpDoneModel) {
  async function createOrUpdate (lpDone) {
    const condition = {
      where: {
        id: lpDone.id
      }
    }

    const existingCondition = await LpDoneModel.findOne(condition)
    if (existingCondition) {
      const update = await LpDoneModel.update(lpDone, condition)
      return update ? LpDoneModel.findOne(condition) : existingCondition
    }
    const creation = await LpDoneModel.create(lpDone)
    return creation
  }

  async function findById (id) {
    return await LpDoneModel.findOne({
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
