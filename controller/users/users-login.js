const login = ({usersDb, bcrypt, jwt}) => {
    return async function post(req, res) {

        const reqDetails = req.body
        console.log(req.body)
        const userDetails = await usersDb.selectAccountByEmail(reqDetails.email)

        if(userDetails.rowCount === 0){
            return res.status(400).send(`Invalid account`)
        }

        
        
        const match = bcrypt.compareSync(reqDetails.password, userDetails.rows[0].password)

        if(!match){
            return res.status(400).send(`Incorrect password`)
        }

        let token = jwt.sign({ id: userDetails.rows[0].id }, 'secret', { expiresIn: '24h' })
     
        return res.status(200).json({
            id: userDetails.rows[0].id,
            token: token,
            role: userDetails.rows[0].description
        })

     
    };
  };
  module.exports = login;