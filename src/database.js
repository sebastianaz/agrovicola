const mongoose =require('mongoose');
// setup variables
//const MONGO_URI = 'mongodb://localhost/sensors-app'
const MONGO_URI = process.env.MONGODB_URI

mongoose.connect(MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(db =>{console.log('database Connected');})
.catch(err=>console.error(err))