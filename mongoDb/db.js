import mongoose from 'mongoose';
import { mongodb_port } from './../config';

mongoose.connect(mongodb_port)

var db=mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log('connected')
})

module.exports= {
    mongoose
};