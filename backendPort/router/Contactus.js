const express = require('express');
const router = express.Router()

// const {}
const {postcontact}=require('../controllers/Contact')

router.post("/send-message", postcontact);

module.exports=router
