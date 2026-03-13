const express = require('express');
const router = express.Router();


const {home_router_v1} = require('./v1/home_router_v1.js');
const {home_router_v2} = require('./v2/home_router_v2.js');
const {product_router_v1} = require('./v1/product_router_v1.js');
const {product_router_v2} = require('./v2/product_router_v2.js');


router.use('/v1', home_router_v1 );
router.use('/v1', product_router_v1);

router.use('/v2', home_router_v2 );
router.use('/v2', product_router_v2);



module.exports = {
     apiRouter: router
}



