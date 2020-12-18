const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./routes/routes');
const config = require('./config/config');

const { port } = config;

app.use(cors());
app.use(express.json());

// Routes
router(app);

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
