const router = require('express').Router()
const Note = require('../models/note')
router.get('/all/:userid',async (req,res) =>{
    try{
        const exams = await Exam.find({user : userid})
        res.send(exams)
    }catch(err){
        res.status(500).send({msg : err})
    }
})

router.post('/add',verify,async (req,res)=>{
    const exam = req.body.exam,
    const user = req.user._id
    const date = req.body.date

    const note = new Note({
        exam,
        user,
        date
    })

    try{
        const savedNote = note.save()
        res.send(savedNote)
    }catch(err){
        res.status(500).json({msg:err})
    }
})