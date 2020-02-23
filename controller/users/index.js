const postgres = require('../../postgres/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const dataAccess = require('./users-data-access')
const usersDb = dataAccess({postgres})

//users
const login = require('./users-login')
const selectAllUsers = require('./users-select-all')
const selectAllUsersWithNoAccount = require('./users-select-all-no-accounts-yet')

//roles
const selectAllUserRoles = require('./users-roles-select-all')

//accounts
const addAccount = require('./users-accounts-add')
const selectAllAccounts = require('./users-accounts-select-all')
const updateAccount = require('./users-accounts-update')





const c_login = login({usersDb, bcrypt, jwt})
const c_selectAllUsers = selectAllUsers({usersDb})
const c_addAccount = addAccount({usersDb, bcrypt})
const c_selectAllAccounts = selectAllAccounts({usersDb})
const c_selectAllUsersWithNoAccount = selectAllUsersWithNoAccount({usersDb})
const c_selectAllUserRoles = selectAllUserRoles({usersDb})
const c_updateAccount = updateAccount({usersDb})

const controller = Object.freeze({
    c_login,
    c_selectAllUsers,
    c_addAccount,
    c_selectAllAccounts,
    c_selectAllUsersWithNoAccount,
    c_selectAllUserRoles,
    c_updateAccount
})
  
  
  module.exports = controller;
  module.exports = {
    c_login,
    c_selectAllUsers,
    c_addAccount,
    c_selectAllAccounts,
    c_selectAllUsersWithNoAccount,
    c_selectAllUserRoles,
    c_updateAccount
  };