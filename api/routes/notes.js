const router = require('express').Router()
const Exam = require('../models/note')
router.get('/all/:userid',async (req,res) =>{
    try{
        const exams = await Exam.find({user : userid})
        res.send(exams)
    }catch(err){
        res.status(500).send({msg : err})
    }
})

router.post('/add',async (req,res)=>{
    const {}
})