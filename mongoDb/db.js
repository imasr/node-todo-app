import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/TodoApp')

var db=mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log('connected')
})

export default {
    mongoose
};