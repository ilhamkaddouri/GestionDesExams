const router = require('express').Router()
const verify = require('../validation/auth')
const Exam = require('../models/exam')

router.post('/',(req,res)=>{
     res.send('i am sending exams')
})
router.get('/all',verify,async (req,res)=>{
     try{
          const exams =  await Exam.find()
          res.send(exams)
     }catch(err){
          res.status(500).json({msg : err})
     }
})
module.exports = router