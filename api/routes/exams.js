const router = require('express').Router()
const verify = require('../validation/auth')
router.post('/',verify,async(req,res)=>{
    res.send('i am sending exams')
})

module.exports = router