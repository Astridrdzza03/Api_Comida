const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/comida',(req,res)=> {
    return res.json({mensaje: "Si cargo, sin comida"})
})

module.exports=router
