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

}));




module.exports = router;
