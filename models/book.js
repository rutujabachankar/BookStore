const mongoose=require('mongoose')

const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'book title is require'],
        trim:true,
        maxLength:[100,'atmost 100 characters']
    },
    author:{
        type:String,
        required:[true,'author name is required'],
        trim:true
    },
    year:{
        type:Number,
        required:[true,'publishing year is required'],
        min:[true,'year must 1000'],
        max:[new Date().getFullYear(),"year cannot be in the future"]

    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('book',BookSchema)