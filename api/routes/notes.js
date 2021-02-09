const router = require('express').Router()
const Note = require('../models/note')
const verify = require('../validation/verifyprof')
router.get('/all/:userid',async (req,res) =>{
    try{
        const exams = await Exam.find({user : userid})
        res.send(exams)
    }catch(err){
        res.status(500).send({msg : err})
    }
})

router.post('/add/:prof/:exam/:userid',async (req,res)=>{
    const exam = req.params.exam
    const user = req.params.userid
    const note = req.body.note
    const prof = req.params.prof
    const notes = new Note({
        prof,
        note,
        exam,
        user
    })

    try{
        const savedNote = notes.save()
        res.send(savedNote)
    }catch(err){
        res.status(500).json({msg:err})
    }
})
module.exports = router