const login = require('../components/login/network');

const routes = app => {
  app.use('/api/login', login);
};

module.export = routes;
