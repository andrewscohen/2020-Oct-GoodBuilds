const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')


/* GET home page. */
router.get('/', csrfProtection, (req, res) => {
  const user = db.User.build()
  res.render('home-page', {
    title: 'Home',
    user,
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;
