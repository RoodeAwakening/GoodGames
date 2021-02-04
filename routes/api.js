const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');


router.post('/:id/ratings', asyncHandler (async (req, res) => {
  const userId = req.session.auth.userId;
  const { gameId, yesOrNoVote } = req.body;

  await db.Rating.create({userId, gameId, yesOrNoVote})
  const allRatings = await db.Rating.findAll({ where: { gameId } });

  let total = 0;
  for (let i = 0; i < allRatings.length; i++){
    const rating = allRatings[i]
    if (rating.yesOrNoVote){
      total+=1
    }
  }

  let newRating;
  if (allRatings.length === 0) {
      newRating = 0;
  } else {
      newRating = (total/allRatings.length) * 100
  }
  res.json({ newRating })
}))

router.post("/:id/statuses", asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId;

  const { gameId, status } = req.body;
  const gameStatus = await db.GameStatus.create({ userId, gameId, status });

  res.json({ gameStatus });
}));

router.patch("/:id/statuses", asyncHandler(async (req, res) => {
  const { id, status } = req.body;
  // const statusUpdate = await db.GameStatus.findOne({ where: status });

  // await statusUpdate.update

}))

router.patch('/:id/ratings', asyncHandler(async(req,res)=>{

}))


router.delete('/:id/ratings',asyncHandler(async(req,res)=>{

}))

module.exports = router;
