const express=require('express');
const generalApi=express.Router();
const Response200 = require("../com.general.dto/Response200");
const GeneralController= require("../com.general.controller/GeneralController");

generalApi.get('/',(req, res)=>{
       return res.send(new Response200("Hello World!",null));
});

generalApi.get('/tipoIdentificacion',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaTiposIdentificacionController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

generalApi.get('/genero',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaGeneroController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

generalApi.get('/pais',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaPaisController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

generalApi.get('/provincia/:secuenciaPais',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaProvinciaController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

generalApi.get('/ciudad/:secuenciaPais/:secuenciaProvincia',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaCiudadController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

generalApi.get('/modulos',(req,res)=>{
    var generalController=new GeneralController();
    generalController.consultaModulosController(req,res,function(r){
        return res.send(new Response200("OK",r));
    });
});

module.exports=generalApi;