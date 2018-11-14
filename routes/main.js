var express = require('express');
var router = express.Router();

// Require controller modules.
var customer_controller = require('../controllers/customerController');


/// Customer ROUTES ///

// GET catalog home page.
router.get('/', customer_controller.index);

// GET catalog home page.
router.get('/customer_list', customer_controller.customer_list);

module.exports = router;