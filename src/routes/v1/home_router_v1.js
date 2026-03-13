const express = require('express');
const router = express.Router();


const {home_controller_v1} = require('../../controller/home_controller.js'); 


router.get('/home', home_controller_v1);



module.exports = {
     home_router_v1:router          
}

