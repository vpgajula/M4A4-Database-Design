const loanLedger = require('../models/loanLedgerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getLoanLedgerById = async (req, res) => {
    // get particular loan ledger details from database
    const { id } = req.params;
    const loanledger = await loanLedger.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: loanledger.length,
        data: {
            loanledger
        }
    });
};

exports.getAllLoanLedgers = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(loanLedger.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const loanledger = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: loanledger.length,
            data: {
                loanledger
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createLoanLedger = async (req, res) => {
    const newLedger = req.body;
    
    try {
        const loanledger = await loanLedger.create(newLedger)
        res.status(201).json({
            status: 'Success',
            data: loanledger
        });
        //res.send('Hello World from loanledger POST');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            error: JSON.stringify(err)
        });
    }
};


exports.updateLoanLedgerById = async (req, res) => {
    const newLoanLedger = req.body;
    const dateTime = new Date().toISOString();
    
    const newloanledger = {...newLoanLedger, modifiedDate: dateTime};

    try {
        const loanledger = await loanLedger.findByIdAndUpdate(req.params.id, newloanledger, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                loanledger
            }
        });
        //res.send('Hello World from loanLedger UpdateByLoanLedgerId');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteLoanLedgerById = async (req, res) => {
    try {
        await loanLedger.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            message: 'Document successfully deleted!',
            data: null
        });
        //res.send('Hello World from loanLedger DELETE');
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
