const doneTransaction = ({transactionsDb}) => {
    return async function put(req, res) {

        try{
        
        const id = req.params.id
        
        const info = {
            id,
            status: 'Done',
            date_completed: new Date()
        }
      

        const update = await transactionsDb.doneTransaction(info)


        return res.status(200).send()

    }catch (e){

        console.log(e)
    }
     
    };
  };
  module.exports = doneTransaction;