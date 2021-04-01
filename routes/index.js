const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');


/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const user = await db.User.build()
  res.render('home-page', {
    title: 'Home',
    user,
    csrfToken: req.csrfToken(),
  });
}));




module.exports = router;
