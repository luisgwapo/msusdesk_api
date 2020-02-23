const selectAllUsersWithNoAccount = ({usersDb}) => {
    return async function get(req, res) {

        

       const view = await usersDb.selectAllUsersWithNoAccount()


        return res.send(view.rows)

      
     
    };
  };
  module.exports = selectAllUsersWithNoAccount;