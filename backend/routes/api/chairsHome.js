const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });

//? Chairs
router.get('/', asyncHandler(async (req, res, next) => {
    const chairs = await db.Spot.findAll()
    // console.log(typeof chairs[0])
    return res.json(chairs)
}))


router.post('/', asyncHandler(async(req, res, next) => {
    const { userId, address, city, state, country, image1, image2, image3, name, price } = req.body
    const chair = await db.Spot.create({
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

    res.redirect(`/chairs/${chair.id}`);

}))


router.get('/home', asyncHandler(async(req, res, next) => {
    const homeChairs = await db.Spot.findAll({
        limit: 5
    })

    return res.json(homeChairs)
}))

router.get('/:id',  asyncHandler(async(req, res, next) => {

    const id = parseInt(req.params.id, 10)
    const chair = await db.Spot.findByPk(id, {
        include: db.User,
    })
    console.log(chair);
    return res.json(chair);
}))

module.exports = router
