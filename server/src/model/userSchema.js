import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  mobile:{
    type:Number,
    require:true
  },
  password:{
    type:String,
    require:true
  }
})

export const userdata = mongoose.model("adityauser",dataSchema)