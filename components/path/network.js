const express = require('express');
const router = express.Router();
const controller = require('./index');

const getPath = (req, res) => {
  try {
    const path = controller.getPath();
    res.status(200).json({
      path,
    });
  } catch (err) {
    res.send(err);
  }
};

router.get('/', getPath);

module.exports = router;
