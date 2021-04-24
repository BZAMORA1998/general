const express=require('express');
const generalApi=express.Router();
const Response200 = require("../com.general.dto/Response200");
const GeneralController= require("../com.general.controller/GeneralController");

generalApi.get('/tipoIdentificacion',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaTiposIdentificacionController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

module.exports=generalApi;