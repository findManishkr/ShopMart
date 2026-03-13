const express = require('express');
const router = express.Router();
const {product_controller_v1} = require('../../controller/product_controller');


router.use('/product',product_controller_v1 );




module.exports = {
    product_router_v1:router
}