const express = require('express');
const router = express.Router();
const loanLedgerController = require('../controllers/loanLedgerController');

router.route('/')
    .get(loanLedgerController.getAllLoanLedgers)
    .post(loanLedgerController.createLoanLedger)

router.route('/:id')
    .get(loanLedgerController.getLoanLedgerById)
    .patch(loanLedgerController.updateLoanLedgerById)
    .put(loanLedgerController.updateLoanLedgerById)
    .delete(loanLedgerController.deleteLoanLedgerById);

module.exports = router;
