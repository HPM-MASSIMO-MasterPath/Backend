'use strict'

const config = require('../../config/index')

module.exports = db => {
  const addInfo = async (body) => {
    const { works } = await db(config())
    const workRepo = {
      url_repo: body.url_repo,
      url_image: body.url_image,
      comments: body.comments,
      userId: body.id_user
    }
    const result = await works.createOrUpdate(workRepo)
    const { id, createAt, updatedAt, ...res } = result
    return res
  }

  return {
    addInfo
  }
}
