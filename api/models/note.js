const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    exam:{
        type :  mongoose.Schema.Types.ObjectId,
        ref :'exam'
    },
    prof:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'prof'
    },
    noteurl:{
        type : String,
        required: true
    }
})

module.exports = mongoose.model('note',NoteSchema)