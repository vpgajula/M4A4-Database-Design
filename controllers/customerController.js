const Customer = require('../models/customerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

// exports.getCustomer = async (req, res) => {
//     // get data from database
//     const customer = await Customer.find()
//     res.status(200).json({
//         status: 'Success',
//         results: customer.length,
//         data: {
//             customer
//         }
//     })
//     // res.send(`Hello World from customer GET ${JSON.stringify(data)}`);
// };

exports.getCustomerById = async (req, res) => {
    // get particular customer details from database
    const { id } = req.params;
    const customer = await Customer.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: customer.length,
        data: {
            customer
        }
    });
};

exports.getAllCustomers = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Customer.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const customer = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: customer.length,
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createCustomer = async (req, res) => {
    const newcustomer = req.body;
     
    try {
        const customer = await Customer.create(newcustomer)
        res.status(201).json({
            status: 'Success',
            data: customer
        });
        //res.send('Hello World from customerloan POST');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Fail message from Create Customer',
            error: JSON.stringify(err)
        });
    }
};


exports.updateCustomerById = async (req, res) => {
    const newcustomer = req.body;
    const dateTime = new Date().toISOString();
    const ncustomer = {...newcustomer, modifiedDate: dateTime};

    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, ncustomer, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
        //res.send('Hello World from customer UpdateCustomerById');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteCustomerById = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            message: 'Document successfully deleted!',
            data: null
        });
        //res.send('Hello World from customer DELETE');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
