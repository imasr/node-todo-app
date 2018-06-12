import express from 'express';
import bodyParser from 'body-parser';
import { ObjectID } from "mongodb";
import {Todo}  from './model/todo-model';
import { server_port } from "./config";
import * as _ from "lodash";

var app=express();
app.use(bodyParser.json())


app.post('/todos', (req, res)=>{
    var todo =new Todo({
        name:  req.body.name,
        age: req.body.age,
        mobile: req.body.mobile,
        developer: req.body.developer
    })
    todo.save().then(resp=>{
        res.send(resp)
    }).catch(e=>{
        res.status(400).send(e)
    })
})
app.get('/todos', (req, res)=>{
    Todo.find().then(todoData=>{
        res.send({todoData})
    }).catch(e=>{
        res.status(400).send(e)
    })
})
app.get('/todos/:id', (req, res)=>{
    var id=req.params.id
    if(!ObjectID.isValid(id)){
       return res.status(404).send({message:"id not found"})
    }
    Todo.findById(id).then(todoData=>{
        res.send({todoData})
    }).catch(e=>{
        res.status(400).send(e)
    })
})
app.delete('/todos/:id', (req, res)=>{
    var id=req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send({message:"id not found"})
     }
    Todo.findByIdAndRemove(id).then(todoData=>{
        res.send({todoData})
    }).catch(e=>{
        res.status(400).send(e)
    })
})
app.put('/todos/:id', (req, res)=>{
    var id=req.params.id
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send({message:"id not found"})
    }
    console.log(req.body)
    var body= _.pick(req.body, ["name","age","mobile","developer"])

    Todo.findByIdAndUpdate(id, {$set: body}, {new:true}).then(todoData=>{
        res.send({todoData})
    }).catch(e=>{
        res.status(400).send(e)
    })
})


app.listen(server_port, ()=>{
    console.log(`Server started at ${server_port}`);
})