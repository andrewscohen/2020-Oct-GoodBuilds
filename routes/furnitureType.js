const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models')
const router = express.Router();


router.get('/:furnitureType', asyncHandler (async (req, res) => {
    const furnitureType = req.params.furnitureType;
    // console.log(furnitureType);
    const furniture = await db.Project.findAll(
        {
        where:
            { furnitureType}
        })
    res.send(furniture);
}));


module.exports = router;
