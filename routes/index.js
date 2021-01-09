const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator')

/* GET home page. */
router.get('/', csrfProtection, (req, res) => {
  const user = db.User.build()
  res.render('home-page', {
    title: 'Home',
    user,
    csrfToken: req.csrfToken(),
  });
});

// const reviewValidators = [
//   check('name')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Name')
//       .isLength({ max: 50 })
//       .withMessage('Name must not be more than 50 characters long'),
//   check('brand')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Brand')
//       .isLength({ max: 50 })
//       .withMessage('Brand must not be more than 50 characters long'),
//   check('furnitureType')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Furniture Type')
//       .isLength({ max: 50 })
//       .withMessage('Furniture Type must not be more than 50 characters long'),
//   check('serialNumber')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Serial Number')
//       .isLength({ max: 100 })
//       .withMessage('Serial Number must not be more than 100 characters long'),
// ];

router.post(
  "/reviews",
  asyncHandler(async (req, res) => {
    // console.log(req.session.user.id)
    const { difficultyLevel, content, rating, completionTime, projectId } = req.body;
    const review = await db.Review.create({ difficultyLevel, content, rating, completionTime, userId: req.session.user.id, projectId });
    console.log('Saved Review!')
    res.redirect(`/project/edit/${projectId}`);
  })
);

module.exports = router;
