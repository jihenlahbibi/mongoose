const express =require ("express");
const connectDB = require("./configu/connectDB");
const person = require("./models/userModel");
const app = express();
const port = 4000;

connectDB; //connection to the database
// question1: create records 
// let user=new person({
//     name: 'imen',
//     email: 'imen@gmail.com',
//     age:30,
//     favoriteFoods:['bonbons','banane']
// })
// user.save().then((doc)=>{
//     console.log(doc)
// }).catch((err)=>{
//     console.log(err)
// })

//ques2:Search Your Database : return all the database

// person.find().then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
//search with name (return all the document having a given name)
// person.find({
//     name:"ines"
// }).then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//question 3:Return a Single Matching Document (i use age  as a search key, jihene is the firt document that have age 28)
// person.findOne({
//  age:28
// })
// .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//quest : to Search By _id 
// person.findOne({_id: '64483a808ac100fb4716b5e9'})
//    .then(doc => {
//        console.log(doc)
//      })
//      .catch(err => {
//        console.error(err)
//      })
//ques4:Perform Classic Updates
// person.updateOne({_id: '64483a808ac100fb4716b5e9'},
// {$push:{favoriteFoods:"tiramisu"}
// })
// .then(doc => {
//    console.log(doc)
//    person.save()
//     })
//     .catch(err => {
//     console.error(err)
//     })
//quest 5:Perform New Updates 

// person.findOneAndUpdate(
// {name:"ines"},
// {age:20},
// {new: true}
// )
// .then((doc)=>{
// console.log(doc)
// })
// .catch((err)=>{
//     console .log(err)
// })
//ques6:Delete One Document 
// person.findByIdAndRemove(
//     {_id: '6448dc599334034eaaf8a9d6'}
//     )
//     .then((doc)=>{
//         console.log(doc)
//     })
//     .catch((err)=>{
//         console .log(err)
//     })
//ques7:Delete Many Documents 
// person.deleteMany(
//     {age:28}
//     )
//     .then((doc)=>{
//         console.log(doc)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// person.deleteOne(
//         {name:"jihene"}
//         )
//         .then((doc)=>{
//             console.log(doc)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

//quest7:Chain Search Query Helpers
// person.find({favoriteFoods:"burritos"})  // find users ,burritos as a key search
//          .limit(2)                // limit to 2 items
//          .sort({name: 1})// sort ascending by name
//          .select({age: true} )// select age only
//          .exec()                   // execute the query
//          .then(docs => {
//             console.log(docs)
//           })
//          .catch(err => {
//             console.error(err)
//           })



app.listen(port,(err)=>{
    (err)? console.log(err):console.log(`the server  started at ${port}`)
})

