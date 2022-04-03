const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

//? Chairs
router.get('/', asyncHandler(async (req, res, next) => {
    const chairs = await db.Spot.findAll()
    console.log(typeof chairs[0])
    return res.json(chairs)
}))

module.exports = router
