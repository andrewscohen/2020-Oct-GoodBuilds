//requirements
const express = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth')

// This is a comment

//setup
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')

const router = express.Router()

//routes
router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});


// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// START OF USER REGISTRATION

const userValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your awesome builder username')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];


router.post('/register', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      userName,
      email,
      firstName,
      lastName,
      password,
    } = req.body;


    const user = db.User.build({
      userName,
      email,
      firstName,
      lastName,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

// END OF USER REGISTRATION ROUTES

// START OF USER LOGIN ROUTES
router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});
const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          console.log('YOU ARE LOGGED IN:  ', req.session);
          return res.redirect('/');
        }
      }

      errors.push('There is no match for that email or password. Please enter again')
    } else {
      errors = validatorErrors.array().map((error) => error.msg)
    }

    res.render('user-login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken()
    });
  }));
// END OF LOGIN ROUTES

// START OF LOGOUT ROUTES
router.post('/logout', (req, res) => {
  logoutUser(req, res);
  console.log('YOU ARE LOGGED OUT:  ', req.session);
  res.redirect('/users/login');
});
// END OF LOGOUT ROUTES

// START OF DEMO ROUTE
router.post(
  "/demo",
  asyncHandler(async (req, res) => {
    const email = "demo@demo.com";
    const user = await db.User.findOne({ where: { email } });
    loginUser(req, res, user);
    console.log('YOU ARE THE DEMO USER', req.session);
    res.redirect("/");
  }));


module.exports = router;
