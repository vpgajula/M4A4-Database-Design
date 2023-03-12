const mongoose = require('mongoose');

const loanLedgerSchema = new mongoose.Schema(
    {
        customerID: {
            type: String,
            required: [true, 'A customer ID is required'],
            unique: true,
            trim: false,
            maxlength: [10, 'A customer ID must have less than or equal to 10 characters'],
            minlength: [2, 'A customer ID must have more than or equal to 2 characters']
        },
        loanNumber: {
            type: Number,
            required: [true, 'A customer loan must have a loan number'],
            unique: false,
            trim: true,
            maxlength: [10, 'A customer loan number must have max of 10 characters'],
            minlength: [5, 'A customer loan number must have min of 5 characters']
        },
        paymentAmount: {
            type: Number,
            required: [true, 'A payment amount is required'],
            unique: false,
            trim: true,
            max: [1000000, 'A payment amount must be less than or equal to 1000000'],
            min: [1, 'A payment amount must be more than or equal to 1']
        },
        interest: {
            type: Number,
            default: 0,
            max: [100000, 'Interest must be less than or equal to 100000'],
            min: [1, 'Interest must be more than or equal to 1']
        },
        principal: {
            type: Number,
            default: 0,
            max: [1000000, 'Principal must be less than or equal to 1000000'],
            min: [1000, 'Principal must be more than or equal to 1000']
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

const loanLedger = mongoose.model('loanLedger', loanLedgerSchema);

module.exports = loanLedger;