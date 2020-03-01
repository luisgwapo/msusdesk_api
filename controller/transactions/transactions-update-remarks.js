const updateRemarks = ({transactionsDb}) => {
    return async function put(req, res) {

        try{
        
        const id = req.params.id
        const reqDetails = req.body
        
        const info = {
            id,
            status: 'For Approval',
            engineer_remarks: reqDetails.remarks
        }
        console.log(info)

        const update = await transactionsDb.updateRemarks(info)


        return res.status(200).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = updateRemarks;