const updateAccount = ({usersDb}) => {
    return async function put(req, res) {

        try{
            const id = req.params.id
            const reqDetails = req.body

            const update = await usersDb.updateAccountRole(id, reqDetails.role_id)
    
        return res.status(200).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = updateAccount;