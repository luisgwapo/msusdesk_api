const addAccount = ({usersDb, bcrypt}) => {
    return async function post(req, res) {

        try{
        const reqDetails = req.body

        
        const userDetails = await usersDb.selectUserById(reqDetails.user_id)
        

        const info = {
            email: `${userDetails.rows[0].first_name}.${userDetails.rows[0].last_name}@msugensan.edu.ph`.toLowerCase(),
            password: bcrypt.hashSync(userDetails.rows[0].id_number, 5),
            role_id: reqDetails.role_id,
            user_id: reqDetails.user_id
        }

        const insert = await usersDb.addAccount(info)

    
        return res.status(201).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = addAccount;