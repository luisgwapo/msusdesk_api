let express = require('express')
let router = express.Router()

let {
  m_tokenValidator
} = require ('../middlewares/index')


const {
  c_selectAllColleges,
  c_selectAllRequestTypes,
  c_addTransaction,
  c_selectAllTransactions,
  c_assignEngineer,
  c_updateRemarks,
  c_assignWorker,
  c_doneTransaction
} = require('../controller/transactions/index')


router.get('/colleges/select', m_tokenValidator, c_selectAllColleges)
router.get('/request-types/select', m_tokenValidator, c_selectAllRequestTypes)
router.post('/add', m_tokenValidator, c_addTransaction)
router.get('/select', m_tokenValidator, c_selectAllTransactions)
router.put('/assign-engineer/:id', m_tokenValidator, c_assignEngineer)
router.put('/update-remarks/:id', m_tokenValidator, c_updateRemarks)
router.put('/assign-worker/:id', m_tokenValidator, c_assignWorker)
router.put('/done/:id', m_tokenValidator, c_doneTransaction)



module.exports = router;
