const router =  require('express').Router()
const user = require('../models/user')
const bcrypt = require('bcryptjs')
router.get('/',(req,res)=>{
    res.send('hello famous world!')
})

router.post('/register',async (req,res)=>{
   
    const emailuser = user.findByOne({email:req.body.email})
    if(emailuser) res.status(400).json({emailnotfound:'email already exists'})

    const salt = await bcrypt.genSalt(12)
    const hashedpassword = await bcrypt.hash(req.body.password,salt)
    const newUser = new user({
        username: req.body.username,
        fname:req.body.fname,
        lname:req.body.lname,
        email: req.body.email,
        password:hashedpassword,
        cne:req.body.password,
    })
    try{
        const saveduser = await user.save(newUser)
        res.status(200).send({id : saveduser._id})
    }catch(err){
        res.status(401).send({msg : err})
    }
    
    
})
module.exports = router