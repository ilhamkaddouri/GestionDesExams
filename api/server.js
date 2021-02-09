const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cros = require('cors')
require('dotenv').config()


const authRoute = require('./routes/auth')
const examsRoute = require('./routes/exams')
const notesRoute = require('./routes/notes')
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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

/* routes */
app.use('/api/auth',authRoute)
app.use('/api/exams',examsRoute)
app.use('/api/notes',notesRoute)


app.listen(8000,()=> console.log('listen to port'))