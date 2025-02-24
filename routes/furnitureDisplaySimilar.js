const express = require('express');
const { asyncHandler } = require('./utils');
const db = require('../db/models')
const router = express.Router();


router.get('/furnitureType/', asyncHandler (async (req, res) => {
    const furnitureType = req.params.furnitureType;
    const furnitureTypes = await db.Project.findAll(
        {
        where:
            { furnitureType}
        });
    res.render('furniture-display', { title: furnitureType, furnitureTypes });
}));


module.exports = router;
