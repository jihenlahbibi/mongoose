const mongoose =require('mongoose');

const personSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age : Number,
  email: {
    type :String,
    unique: true,
    lowercase: true
   },
 favoriteFoods:[]
})
module.exports=mongoose.model("person",personSchema)