const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config();


const authRoute = require('./routes/auth')

/*
    *connect to bd
*/

mongoose.connect(process.env.DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
},()=>{
    console.log('Connected to DB');
})

/*Middleware 
    *To be able to read the json data posted
    *Cross origin ressource sharing
*/
app.use(express.json());
app.use(cors())

/*Routes middleware
    *
*/
app.use('/api/auth',authRoute)


/*
    *Run Node server
*/

app.listen(8000,()=>console.log('server running perfectly yey***'))