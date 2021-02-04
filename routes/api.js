const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler, calcRating } = require('./utils');
const { logoutUser } = require('../auth');

router.post('/:id/ratings', asyncHandler (async (req, res) => {
  const userId = req.session.auth.userId;
  const { gameId, yesOrNoVote } = req.body;
  const checkRating = await db.Rating.findOne({ where: { userId, gameId }})

  if (checkRating !== null) {
    checkRating.destroy();
  }
  await db.Rating.create({ userId, gameId, yesOrNoVote })
  const allRatings = await db.Rating.findAll({ where: { gameId } });
  let newRating = await calcRating(allRatings);
 
  res.json({ newRating })
}))

router.post("/:id/statuses", asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId;
  const { gameId, status } = req.body;

  if (status === 'delete') {
    await db.GameStatus.destroy({ where: { userId, gameId }});

  } else {
    const gameStatus = await db.GameStatus.create({ userId, gameId, status });

    res.json({ gameStatus });
  }
}));

router.patch('/:id/ratings', asyncHandler(async(req,res)=>{

}));


router.delete('/:id/ratings',asyncHandler(async(req,res)=>{

}));

module.exports = router;
