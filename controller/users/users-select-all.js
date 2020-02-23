const selectAllUsers = ({usersDb}) => {
    return async function get(req, res) {

        

       const view = await usersDb.selectAllUsers()


        return res.send(view.rows)

      
     
    };
  };
  module.exports = selectAllUsers;