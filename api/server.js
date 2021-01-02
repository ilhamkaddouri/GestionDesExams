const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cros = require('cors')
require('dotenv').config()


const authRoute = require('./routes/auth')
const examsRoute = require('./routes/exams')
mongoose.connect(process.env.DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
},()=>{
    console.log('sucess')
})


/*
use middleware before caling the routes
*/
app.use(express.json())
app.use(cros())


/* routes */
app.use('/api/auth',authRoute)
app.use('/api/exams',examsRoute)



app.listen(8000,()=> console.log('listen to port'))