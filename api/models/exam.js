const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        
    },
    professeur:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'professeur'
    },
    date :{
        type : Date,
        required : true
    }
})

module.exports = mongoose.model('exam',ExamSchema)