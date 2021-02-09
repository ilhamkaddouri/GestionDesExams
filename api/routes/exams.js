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

router.post('/exam',verify, (req,res)=>{
     const prof_id= req.prof;
          
          const label= req.body.name;
          const examdae = req.body.date;
          const timed = req.body.time
          const exam =  new Exam({
               professeur : prof_id,
               name : label,
               date : examdae,
               time: timed

          })
     try{
          const savedExam = exam.save()
          res.send({exam: "saved"+savedExam})
     }catch(err){
          res.status(500).json({msgErr:err+"erooooooooooooooooooor"})
     }
})

router.get('/profexams/:profid',async (req,res)=>{
     try{
          const exams =  await Exam.find({professeur : req.params.profid})
          res.send(exams)
     }catch(err){
          res.status(500).send({msg:err})
     }
})
module.exports = router