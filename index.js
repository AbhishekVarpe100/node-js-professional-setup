const express=require('express')
const app=express()
require('dotenv').config()
const Connection=require('./Connection')
const ProductRoutes=require('./routes/ProductRoutes')
const cors=require('cors')
app.use(express.json())
app.use(cors())

// app.use('/api/products',ProductRoutes)
app.use('/',ProductRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})

