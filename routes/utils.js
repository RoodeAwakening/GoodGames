const csrf = require('csurf')

const csrfProtection = csrf({cookie:true})

const asyncHandler = (handler) => (req,res,next) => handler(req,res,next).catch(next)

const calcRating = async (allRatings) => {
    let newRating;

    let total = 0;
    for (let i = 0; i < allRatings.length; i++) {
        const rating = allRatings[i]
        if (rating.yesOrNoVote) {
            total+=1;
        }
    }

    if (allRatings.length === 0) {
        newRating = 0;
    } else {
        newRating = Math.floor((total/allRatings.length) * 100);
    }

    return newRating;
}

module.exports = {
    csrfProtection,
    asyncHandler,
    calcRating
}
