var Customer = require('../models/customer');

exports.index = function(req, res) {
    res.send('customer index goes here');
};

exports.customer_list = function(req, res) {
    res.send('Customer list goes here');
}