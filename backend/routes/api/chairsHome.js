const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

//? Chairs
router.get('/', asyncHandler(async (req, res, next) => {
    const chairs = await db.Spot.findAll()
    // console.log(typeof chairs[0])
    return res.json(chairs)
}))


router.get('/home', asyncHandler(async(req, res, next) => {
    const homeChairs = await db.Spot.findAll({
        limit: 5
    })

    return res.json(homeChairs)
}))

router.get('/:id', asyncHandler(async(req, res, next) => {

    const id = parseInt(req.params.id, 10)
    const chair = await db.Spot.findByPk(id)
    
    return res.json(chair);
}))

module.exports = router
