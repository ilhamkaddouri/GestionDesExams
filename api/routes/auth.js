const router = require('express').Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { check, validationResult } = require('express-validator');
router.get('/',()=>{

})

router.post('/register',[check('email').isEmail(),
    check('cne').not().not(),check('password').isLength({min:6})
],async (req,res)=>{
      
    const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ msg: errors});
    // }

    const  email = req.body.email
    
    const password = req.body.password
    const exituser = await User.findOne({email: email})
    
    
    try{
        if (exituser) {return res.status(400).json({msg:'email already exists'})}
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
        const savedUser = await user.save()
        res.send({user : savedUser._id})
    }catch(err){
        res.status(400).json({msg : err})
    }


  
})

router.post('/login',async (req,res)=>{
    try{
        const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({email :  email})
    if(!user) return res.status(400).json({msg:'email does not exists'})

    const validpass = await bcrypt.compare(password,user.password)
    if(!validpass) return res.status(400).json({msg:'password incorrect'})

    const token = jwt.sign({_id : user._id},process.env.Secret)
    res.json({
        token,
        user:{
            id: user._id,
            name : user.fname
        }
    })
    }catch(err){
        res.status(500).json({ msg: err.message });
    }
    //getting required daata
    



})

module.exports = router