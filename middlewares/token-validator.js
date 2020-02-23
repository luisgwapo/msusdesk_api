const tokenValidator = ({jwt}) => {
    return async function token(req, res, next) {
        try{
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        await jwt.verify(token,'secret')

        return next()

    }catch (e){
        return res.status(403).send()
    }
     
    };
  };
  module.exports = tokenValidator;