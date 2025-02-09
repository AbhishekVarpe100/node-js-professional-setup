const mongoose=require('mongoose')
const Connection=mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Connected")).catch(err=>console.log(err))

module.export=Connection

