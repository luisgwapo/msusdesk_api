const postgres = require('../../postgres/index')

const dataAccess = require('./transactions-data-access')

const transactionsDb = dataAccess({postgres})

const selectAllColleges = require('./transactions-college-select-all')
const selectAllRequestTypes = require('./transactions-request-types-select-all')
const addTransaction = require('./transactions-add')
const selectAllTransactions = require('./transactions-select-all')
const assignEngineer = require("./transactions-assign-engineer")
const updateRemarks = require("./transactions-update-remarks")
const assignWorker = require("./transactions-assign-worker")
const doneTransaction = require("./transactions-done")

const c_selectAllColleges = selectAllColleges({transactionsDb})
const c_selectAllRequestTypes = selectAllRequestTypes({transactionsDb})
const c_addTransaction = addTransaction({transactionsDb})
const c_selectAllTransactions = selectAllTransactions({transactionsDb})
const c_assignEngineer = assignEngineer({transactionsDb})
const c_updateRemarks = updateRemarks({transactionsDb})
const c_assignWorker = assignWorker({transactionsDb})
const c_doneTransaction = doneTransaction({transactionsDb})

const controller = Object.freeze({
    c_selectAllColleges,
    c_selectAllRequestTypes,
    c_addTransaction,
    c_selectAllTransactions,
    c_assignEngineer,
    c_updateRemarks,
    c_assignWorker,
    c_doneTransaction
})
  
  
  module.exports = controller;
  module.exports = {
    c_selectAllColleges,
    c_selectAllRequestTypes,
    c_addTransaction,
    c_selectAllTransactions,
    c_assignEngineer,
    c_updateRemarks,
    c_assignWorker,
    c_doneTransaction
  };