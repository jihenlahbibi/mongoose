const mongoose =require("mongoose");
//connnection to the cloud 
 const connectDB = async()=>{
   
await mongoose.connect('mongodb+srv://jihenelahbibipro:jiheneMGDB23@jihene.mydblmc.mongodb.net/frst', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
console.log('Database connection successful')})
.catch(()=>{
console.error('Database connection error')
})
 }
 module.exports=connectDB();
 