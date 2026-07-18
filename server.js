require('dotenv').config()

const express=require('express')
const connectDB=require('./database/db')
const router = require('./routes/book-routes')

const app=express()
app.use(express.json())
app.use('/api/book',router)
connectDB()

 
 const port=process.env.port
 app.listen(port,()=>{
    console.log(`server is ${port}`)
 })