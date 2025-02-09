const express=require('express')
const app=express()
require('dotenv').config()
const Connection=require('./Connection')
const ProductRoutes=require('./routes/ProductRoutes')

app.use(express.json())

// app.use('/api/products',ProductRoutes)
app.use('/',ProductRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})

