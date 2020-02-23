let express = require('express')
let router = express.Router()

let {
  m_tokenValidator
} = require ('../middlewares/index')


const {
  c_login,
  c_selectAllUsers,
  c_addAccount,
  c_selectAllAccounts,
  c_selectAllUsersWithNoAccount,
  c_selectAllUserRoles,
  c_updateAccount
} = require('../controller/users/index')


router.post('/login',  c_login)
router.get('/select', m_tokenValidator, c_selectAllUsers)
router.get('/select-no-account', m_tokenValidator, c_selectAllUsersWithNoAccount)

router.post('/accounts/add', m_tokenValidator, c_addAccount)
router.get('/accounts/select', m_tokenValidator, c_selectAllAccounts)
router.put('/accounts/update/:id', m_tokenValidator, c_updateAccount)

router.get('/roles/select', m_tokenValidator, c_selectAllUserRoles)


module.exports = router;
