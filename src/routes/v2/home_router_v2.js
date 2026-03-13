const express = require('express');
const router = express.Router();


const {home_controller_v2} = require('../../controller/home_controller.js'); 
const home_router_v1 = require('../v1/home_router_v1.js');


router.get('/home', home_controller_v2);



module.exports = {
     home_router_v2: router
}

