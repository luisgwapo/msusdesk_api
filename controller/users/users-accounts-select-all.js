const selectAllAccounts = ({usersDb}) => {
    return async function get(req, res) {

        

       const view = await usersDb.selectAllAccounts()


        return res.send(view.rows)

      
     
    };
  };
  module.exports = selectAllAccounts;