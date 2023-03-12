const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        customerID: {
            type: String,
            required: [true, 'A customer ID is required'],
            unique: true,
            trim: false,
            maxlength: [10, 'A customer ID must have less than or equal to 10 characters'],
            minlength: [2, 'A customer ID must have more than or equal to 2 characters']
        },
        userName:  {
            type: String,
            required: [true, 'A customer must have a user name'],
            unique: false,
            trim: true,
            maxlength: [40, 'A user name must have less than or equal to 40 characters'],
            minlength: [2, 'A user name must have more than or equal to 2 characters']
        },
        customerFirstName:  {
            type: String,
            required: [true, 'A customer must have a first name'],
            unique: false,
            trim: true,
            maxlength: [40, 'A customer first name must have less than or equal to 40 characters'],
            minlength: [2, 'A customer first name must have more than or equal to 2 characters']
        },
        customerMiddleName:  {
            type: String,
            required: [false, 'A customer may have a middle name'],
            unique: false,
            trim: true,
            maxlength: [40, 'A customer name must have less than or equal to 40 characters'],
            minlength: [1, 'A customer name must have more than or equal to 1 characters']
        },
        customerLastName:  {
            type: String,
            required: [true, 'A customer must have a last name'],
            unique: false,
            trim: true,
            maxlength: [40, 'A customer last name must have less than or equal to 40 characters'],
            minlength: [2, 'A customer last name must have more than or equal to 2 characters']
        }, 
        dateofBirth: {
            type: Date,
            required: [true, 'A customer must have a date of birth'],
            unique: false,
            trim: false,
            maxlength: [10, 'A date of birth must have max of 10 characters MM/DD/YYYY'],
            minlength: [10, 'A date of birth must have min of 10 characters MM/DD/YYYY']
        },
        gender: {
            type: String,
            enum: {
                values: ['Male', 'Female'],
                message: '{VALUE} is not a valid gender type'
            },
            required: [true, 'A customer must have a gender'],
            unique: false,
            trim: false
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

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;