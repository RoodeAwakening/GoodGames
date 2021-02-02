const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

/* GET users listing. */
router.get('/', csrfProtection, asyncHandler(async (req, res)=> {
  res.render('login', { csrfToken: req.csrfToken() })
  })
);

const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post("/", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { emailAddress, hashedPassword } = req.body;

  req.session.user = user;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { emailAddress } });

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      if (passwordMatch) {
        return res.redirect('/');
      }
    }

    errors.push('Login failed for the provided email address and password');

  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    emailAddress,
    errors,
    csrfToken: req.csrfToken(),
  })
}));


module.exports = router;
