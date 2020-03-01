const addTransaction = ({transactionsDb}) => {
    return async function post(req, res) {

        try{
        const reqDetails = req.body

        const info = {
            date_requested: new Date(),
            requester_id: reqDetails.requesterId,
            status: 'Pending',
            request_type_id: reqDetails.requestTypeId,
            location_id: reqDetails.locationId,
            request_description: reqDetails.requestDescription
        }


        const insert = await transactionsDb.addTransaction(info)


        return res.status(201).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = addTransaction;