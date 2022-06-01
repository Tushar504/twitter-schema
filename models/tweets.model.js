const mongoose=require("mongoose")

const tweetSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,
             ref:"user",
              required:true},
    content:{type:String,required:true}
},{
    timestamps:true
})