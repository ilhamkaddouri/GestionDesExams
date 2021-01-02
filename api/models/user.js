const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    cne:{
        type:String,
        min: 10,
        required:true
    },
    fname:{
        type : String,
        required: true,
        max : 24,
        min :3
    },
    lname:{
        type: String,
        required : true,
        max : 24,
        min :3
    },
    email:{
        type:String,
        required: true,
        max : 224,
        min : 24
    },
    password:{
        type: String,
        required:true,
        max:255,
        min: 6

    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',UserSchema)