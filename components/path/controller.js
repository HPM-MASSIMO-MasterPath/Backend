'use strict';

const config = require('../../config/index');

module.exports = db => {
  const getPath = async id => {
    try {
      const { users } = await db(config());
      const user = await users.findById(id);
      return user;
    } catch (err) {
      throw err;
    }
  };

  return {
    getPath,
  };
};
