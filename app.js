import express from 'express';
import mongoose from './mongoDb/db';
import bodyParser from 'body-parser';

var app=express();
app.listen('3000', ()=>{
    console.log('Port 3000 Started');
})