import {mongoose} from "./../mongoDb/db";

var Todo= mongoose.model('Todo',{
    name: {
        type:String,
        required: true,
        minlength: 5
    },
    age: {
        type :Number,
        required: true
    },
    mobile:{
        type:Number,
        required: true,
        minlength:10
    },
    developer: {
        type: Boolean
    }
})
module.exports = {
    Todo
};