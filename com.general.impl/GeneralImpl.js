const express=require('express');
const generalImpl=express.Router();

generalImpl.get('/prueba',(req,rest)=>{
    rest.send("Welcome to backend");
});

module.exports=generalImpl;