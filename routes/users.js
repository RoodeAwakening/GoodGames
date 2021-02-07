const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { logoutUser } = require('../auth');

router.get('/:id', asyncHandler(async (req, res) => {
    if (!req.session.auth) {
        res.redirect('/login')
    }
    const userId = req.session.auth.userId;

    const user = await db.User.findByPk(userId, {
        include: [db.GameStatus, db.Game, db.Comment]
    });

    const comments = await db.Comment.findAll({
        where: { userId },
        include: db.Game
    });

    const userGames = user.Games;

    const toPlay = [];
    const played = [];
    const playing = [];
    userGames.forEach(game => {
        if (game.GameStatus.status === "toPlay") {
            toPlay.push(game);
        } else if (game.GameStatus.status === "played") {
            played.push(game);
        } else if (game.GameStatus.status === "playing") {
            playing.push(game);
        }
    });

    res.render('user-profile', { user, userId, toPlay, played, playing, comments })
}));


router.post('/logout', (req,res) => {
    req.session.destroy(function(err) {});
    res.redirect('/login');
})

module.exports = router;
