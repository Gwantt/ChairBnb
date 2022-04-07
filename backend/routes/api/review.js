const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


router.delete('/:id', asyncHandler(async(req, res, next) => {
    console.log('Delete Route Hit')
    const id = parseInt(req.params.id, 10);

    const review = await db.Review.findByPk(id);

    console.log(review);

    const deletedReview = await review.destroy()

    console.log('Deleted Review -> ', deletedReview )

    return res.json( id );
}))

module.exports = router
