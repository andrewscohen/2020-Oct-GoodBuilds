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

// const reviewValidators = [
//   check('difficultyLevel')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a level of difficulty to submit'),
//   check('rating')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a level of enjoyment to submit'),
//   check('completionTime')
//       .exists({ checkFalsy: true })
//       .withMessage('How long did it take you to build your beautiful new furniture? (Required to submit)')
//       .isLength({ max: 50 })
//       .withMessage('Completion time must not be more than 50 characters long'),
// ];

router.post(
  "/reviews",
  asyncHandler(async (req, res) => {
    // console.log(req.session.user.id)
    let { difficultyLevel, content, rating, completionTime, projectId } = req.body;
    difficultyLevel = parseInt(difficultyLevel);
    console.log(req.body);
    rating = parseInt(rating);
    const review = await db.Review.create({ difficultyLevel, content, rating, completionTime, userId: req.session.auth.userId, projectId });
    console.log('Saved Review!')
    res.redirect(`/projects/${projectId}`);
  })
);

//attempting to implement  review validators
// const review = db.Review.build(
//   { difficultyLevel, content, rating, completionTime, userId: req.session.auth.userId, projectId }
// );

// const validatorErrors = validationResult(req);

// if (validatorErrors.isEmpty()) {
//   await review.save();
//   res.redirect(`/projects/${projectId}`);
// } else {
//   const errors = validatorErrors.array().map((error) => error.msg);
//   req.locals.errors = errors;
//   res.redirect(`/projects/${projectId}`);
//   next(errors);
// }



module.exports = router;
