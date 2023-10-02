const mongoose=require("mongoose")
// mongodb://0.0.0.0:27017/react-login-tut
mongoose.connect("mongodb+srv://gautamsingh893591:V2jTulad1dfL6bE9@cluster0.vwrm2se.mongodb.net/student?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
