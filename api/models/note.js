const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    exam:{
        type :  mongoose.Schema.Types.ObjectId,
        ref :'exam'
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

module.exports = mongoose.model('note',NoteSchema)