const router = require('express').Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.get('/',()=>{

})

router.post('/register',async (req,res)=>{
      
    const  email = req.body.email
    
    const password = req.body.password
    const exituser = await User.findOne({email: email})
    
    if (exituser) {return res.status(400).json({emilnotfound:'email already exists'})}
    if(!email || !password) return res.status(400).json({msg:'email and password are required'})

    /* hashing the password */
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(password,salt)
    const user = new User({
        cne : req.body.cne,
        fname : req.body.fname,
        lname : req.body.lname,
        email : email,
        password : hashedpass,
    })
    try{
        const savedUser = await user.save()
        res.send({user : savedUser._id})
    }catch(err){
        res.status(400).json({error : err})
    }


  
})

router.post('/login',async (req,res)=>{
    //getting required daata
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({email :  email})
    if(!user) return res.send('email does not exists')

    const validpass = await bcrypt.compare(password,user.password)
    if(!validpass) return res.send('password incorrect')

    const token = jwt.sign({_id : user._id},process.env.Secret)
    res.header('token',token).send(token)



})

module.exports = router