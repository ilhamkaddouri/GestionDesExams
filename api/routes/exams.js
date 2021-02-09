const router = require('express').Router()
const Exam = require('../models/exam')
const verify = require("../validation/verifyprof")
router.post('/',(req,res)=>{
     res.send('i am sending exams')
})
router.get('/all',async (req,res)=>{
     try{
          const exams =  await Exam.find()
          res.send(exams)
     }catch(err){
          res.status(500).json({msg : err})
     }
})

router.post('/exam',verify,async (req,res)=>{
     try{
          const prof_id= req.prof;
          
          const label= req.body.name;
          const examdae = req.body.date;

          const exam = await new Exam({
               professeur : prof_id,
               name : label,
               date : examdae

          })

          if(!exam) res.status(400).json({msg : "please enter your data"})
          const savedExam = exam.save()
          res.send(savedExam)
     }catch(err){
          res.status(500).json({msgErr:err})
     }
})
module.exports = router