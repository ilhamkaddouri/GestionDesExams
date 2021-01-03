const router = require('express').Router()
const verify = require('../validation/auth')
router.post('/',(req,res)=>{
     res.send('i am sending exams')
})

module.exports = router