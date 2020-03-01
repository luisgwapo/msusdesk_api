const selectAllTransactions = ({transactionsDb}) => {
    return async function get(req, res) {

        

      

        const view = await transactionsDb.selectAllTransactions()


        return res.send(view.rows)
      
     
    };
  };
  module.exports = selectAllTransactions;