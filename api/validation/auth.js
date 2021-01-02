const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    const token = req.header('token')

    if(!token) return res.status(401).send('access denied')
    try{
        const verified = jwt.verify(token,process.env.Secret)
        req.user = verified
        console.log(req.user)
        next()
    }catch(err){
        console.log(err)
    }
       
  
}


