const assignWorker = ({transactionsDb}) => {
    return async function put(req, res) {

        try{
        
        const id = req.params.id
        const reqDetails = req.body
        
        const info = {
            id,
            status: 'Approved',
            worker_id: reqDetails.worker_id
        }

        const update = await transactionsDb.assignWorker(info)


        return res.status(200).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = assignWorker;