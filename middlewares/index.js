
const jwt = require('jsonwebtoken')



const tokenValidator = require('./token-validator')



const m_tokenValidator = tokenValidator({jwt})


const middlewares = Object.freeze({
    m_tokenValidator,
  
})
  
  
  module.exports = middlewares;
  module.exports = {
    m_tokenValidator,
  };