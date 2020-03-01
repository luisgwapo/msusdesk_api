const selectAllRequestTypes = ({transactionsDb}) => {
    return async function get(req, res) {

        

       const view = await transactionsDb.selectAllRequestTypes()


        return res.send(view.rows)

  
      
     
    };
  };
  module.exports = selectAllRequestTypes;