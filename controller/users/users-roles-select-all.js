const selectAllUserRoles = ({usersDb}) => {
    return async function get(req, res) {

        

       const view = await usersDb.selectAllRoles()


        return res.send(view.rows)

      
     
    };
  };
  module.exports = selectAllUserRoles;