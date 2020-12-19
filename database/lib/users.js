'use strict'

module.exports = function setup (UsersModel) {
  async function createOrUpdate (users) {
    /* const condition = {
      where: {
        id: users.id
      }
    }

    const existingCondition = await UsersModel.findOne(condition)
    if (existingCondition) {
      const update = await UsersModel.update(users, condition)
      return update ? UsersModel.findOne(condition) : existingCondition
    } */
    const creation = await UsersModel.create(users)
    return creation
  }

  async function findById (id) {
    return await UsersModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByName (username) {
    return await UsersModel.findOne({
      where: {
        username
      }
    })
  }

  async function findByEmail (email) {
    return await UsersModel.findOne({
      where: {
        email
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByEmail,
    findByName
  }
}
