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

router.post(
  "/reviews",
  asyncHandler(async (req, res) => {
    // console.log(req.session.user.id)
    const { difficultyLevel, content, rating, completionTime, userId } = req.body;
    const review = await db.Review.create({ difficultyLevel, content, rating, completionTime, userId: req.session.user.id });
    console.log('Saved Review!')
    res.json({ review });
  })
);

module.exports = router;
