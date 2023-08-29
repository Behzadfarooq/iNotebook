// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/?directConnection=true"
// const connectToMongo=async ()=>{
//    await mongoose.connect(mongoURI,()=>{
//         console.log("connected to mongo");
//     })
// }
// module.exports = connectToMongo;

// const  connectToMongo= async()=> {
//     try {
//       await mongoose.connect('mongodb://localhost:27017/?directConnection=true');
//       console.log('Connected to MongoDB');
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error);
//     }
//   }
  // db.js

const mongoose = require('mongoose');

const connectToMongo= async()=> {
    await mongoose.connect('mongodb://localhost:27017/inotebook?directConnection=true');
    console.log('Connected to MongoDB');
 
}
module.exports = {
  connectToMongo
};
