const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        
    },
    matiere:[
        {   
            type: mongoose.Schema.Types.ObjectId,
            ref : 'matiere'
        
        }

    ],
    date :{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('exam',ExamSchema)