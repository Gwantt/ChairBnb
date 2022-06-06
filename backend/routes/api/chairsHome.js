const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
  } = require("../../awsS3");
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });

//? Chair /api/chairs/
router.get('/', asyncHandler(async (req, res, next) => {
    const chairs = await db.Spot.findAll()
    return res.json(chairs)
}))


router.post('/', multipleMulterUpload("images"), asyncHandler(async (req, res, next)  => {
    const { userId, address, city, state, country, name, price } = req.body
    
    const images = await multiplePublicFileUpload(req.files)

    const chair = await db.Spot.create({
        userId,
        address,
        city,
        state,
        country,
        name,
        price
    });
    return res.json(chair)
}))


// /api/chairs/home
router.get('/home', asyncHandler(async (req, res, next) => {
    const homeChairs = await db.Spot.findAll({
        limit: 5
    })

    return res.json(homeChairs)
}))


router.get('/:id', asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10)
    const chair = await db.Spot.findByPk(id, {
        include: [ db.User, { model: db.Review, include: db.User } ]
    })
    return res.json(chair);
}))


router.put('/:id', asyncHandler(async (req, res, next) => {
    const { userId, address, city, state, country, image1, image2, image3, name, price } = req.body

    const id = parseInt(req.params.id, 10);

    // console.log('ID -->', id);

    const chair = await db.Spot.findByPk(id);

    const updatedChair = await chair.update({
        userId,
        address,
        city,
        state,
        country,
        image1,
        image2,
        image3,
        name,
        price
    });

    return res.json(updatedChair)

}))

router.post('/:id/reviews', asyncHandler(async(req, res, next) => {
    const {userId, spotId, review, rating} = req.body;

    const newReview = await db.Review.create({
        userId,
        spotId,
        review,
        rating
    })

    res.json(newReview)
}))

router.delete('/:id', asyncHandler(async(req, res) => {

    const id = parseInt(req.params.id, 10)

    const chair = await db.Spot.findByPk(id)

    const deletedChair = await chair.destroy()

    return res.json(deletedChair)

}))

module.exports = router
