const express=require('express');
const generalImpl=express.Router();
const GeneralDao = require("../com.general.dao/GeneralDao");

generalImpl.get('/tipoIdentificacion',(req,res)=>{

    generalDao=new GeneralDao();
    generalDao.consultaTiposIdentificacion(req,res);

});

module.exports=generalImpl;