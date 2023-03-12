const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
    {
        customerID: {
            type: String,
            required: [true, 'A customer ID is required'],
            unique: true,
            trim: false,
            maxlength: [10, 'A customer ID must have less than or equal to 10 characters'],
            minlength: [2, 'A customer ID must have more than or equal to 2 characters']
        },
        loanType: {
            type: String,
            enum: {
                values: ['Home', 'Auto', 'Boat', 'Life'],
                message: '{VALUE} is not a valid loan type'
            },
            required: [true, 'A loan type is required - Home, Auto, Boat, Life'],
            unique: false,
            trim: false
        },
        loanNumber: {
            type: Number,
            required: [true, 'A customer loan must have a loan number'],
            unique: false,
            trim: true,
            maxlength: [10, 'A customer loan number must have max of 10 characters'],
            minlength: [5, 'A customer loan number must have min of 5 characters']
        },
        loanAmount: {
            type: Number,
            required: [true, 'A loan amount is required'],
            unique: false,
            trim: true,
            max: [1000000, 'A loan amount must be less than or equal to 1000000'],
            min: [1, 'A loan amount must be more than or equal to 1']
        },
        interestRate: {
            type: Number,
            default: 1,
            max: [20, 'Interest rate must be less than or equal to 20'],
            min: [0, 'Interest rate must be more than or equal to 0']
        },
        loanTermYears: {
            type: Number,
            required: [true, 'A loan term is required'],
            default: 5,
            unique: false,
            trim: true,
            max: [30, 'Loan term must be less than or equal to 30'],
            min: [1, 'Loan term must be more than or equal to 1']
        },
        startDate: {
            type: Date,
            default: Date.now,
            required: [true, 'A loan start date is required'],
            unique: false,
            trim: true,
            maxlength: [10, 'A date of birth must have max of 10 characters MM/DD/YYYY'],
            minlength: [10, 'A date of birth must have min of 10 characters MM/DD/YYYY']
        },
        createdDate: {
            type: Date,
            default: Date.now,
            required: [true, 'A created date is required'],
            autopopulate: true,
            trim: false
        },
        modifiedDate: {
            type: Date,
            default: Date.now,
            required: [true, 'A modified date is required'],
            autopopulate: true,
            trim: false
        },
        isDeleted: {
            type: String,
            default: "N",
            required: [false, 'The isDeleted flag is optional'],
            autopopulate: true,
            trim: false
        }
});

const customerLoan = mongoose.model('customerLoan', loanSchema);

module.exports = customerLoan;