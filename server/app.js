const express =require('express')
const mongoose=require ('mongoose')
const router=require("./routes/book-routes")
const cors = require ("cors")
const app=express();



// middle wares
app.use(express.json())
app.use(cors())
app.use('/books',router)


mongoose.connect('mongodb+srv://msrcp07:msrcp07p@cluster0.1qyrfwk.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("connected to database."))
.then(()=>{
    app.listen(5000)
}).catch((error)=>{
    console.log(error)
})