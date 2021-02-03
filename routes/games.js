const express = require('express');
const router = express.Router();

const db = require('../db/models');
const rating = require('../db/models/rating');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', asyncHandler(async (req, res) => {
    const games = await db.Game.findAll();
    const userId = req.session.auth.userId;

    res.render('games', { games, userId })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const gameId = req.params.id
    const game = await db.Game.findByPk(gameId, {
        include: [db.Console, db.Publisher, db.Genre]
    });
    const allRatings = await db.Rating.findAll({ where: { gameId } });
    const allComments = await db.Comment.findAll({ where: { gameId } });

    let total = 0
    for (let i = 0; i < allRatings.length; i++){
        const rating = allRatings[i]
        if (rating.yesOrNoVote){
            total+=1
        }
    }
    if (allRatings.length === 0) {
        game.rating = 0;
    } else {
        game.rating = (total/allRatings.length) * 100
    }
    res.render('game-detail', { game, allComments })
}))

module.exports = router;
