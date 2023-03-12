const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.route('/')
    //.get(customerController.getCustomer)
    .get(customerController.getAllCustomers)
    .post(customerController.createCustomer)

router.route('/:id')
    .get(customerController.getCustomerById)
    .patch(customerController.updateCustomerById)
    .put(customerController.updateCustomerById)
    .delete(customerController.deleteCustomerById);

module.exports = router;
