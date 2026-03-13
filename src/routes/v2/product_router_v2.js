const express = require('express');
const router = express.Router();
const {product_controller_v2} = require('../../controller/product_controller');


router.use('/product',product_controller_v2 );




module.exports = {
    product_router_v2:router
}