'use strict'

module.exports = function setup (LpDoneModel) {
  async function createOrUpdate (lpDone) {
    
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
