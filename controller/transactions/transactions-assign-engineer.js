const assignEngineer = ({transactionsDb}) => {
    return async function put(req, res) {

        try{
        
        const id = req.params.id
        const reqDetails = req.body
        
        const info = {
            id,
            status: 'Inspecting',
            engineer_id: reqDetails.engineer_id
        }

        const update = await transactionsDb.assignEngineer(info)


        return res.status(200).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = assignEngineer;