const selectAllColleges = ({transactionsDb}) => {
    return async function get(req, res) {

        

       const view = await transactionsDb.selectAllColleges()


        return res.send(view.rows)

  
      
     
    };
  };
  module.exports = selectAllColleges;