const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/anydatabase")

const userschema=mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    image:String
})

module.exports=mongoose.model('user',userschema);