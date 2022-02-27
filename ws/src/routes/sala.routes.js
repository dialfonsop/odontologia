const express = require('express')
const router = express.Router();
const Sala = require('../models/sala.js')

router.post('/', async(req, res) =>{

    try {
        
        const sala = await new Sala(req.body).save();
        res.json({sala});

    } catch (error) {
        res.json({ error:true, message: error.message})
    }

})

module.exports = router;
