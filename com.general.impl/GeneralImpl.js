const express=require('express');
const generalImpl=express.Router();
const Response200 = require("../com.general.dto/Response200");
const TipoIdentificacionDTO = require("../com.general.dto/TipoIdentificacionDTO");

generalImpl.get('/tipoIdentificacion',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err);

        query="SELECT *FROM tbl_tipos_identificacion";

        conn.query(query,(err,rows)=>{
            if(err)return res.send(err.sqlMessage);

            var arr1 = new Array();

            data=rows;

            data.forEach(r=>{
                objTipoIdentificacionDTO=new TipoIdentificacionDTO(
                    r.SECUENCIA_TIPO_IDENTIFICACION,
                    r.nombre ,
                    r.es_activo);
                arr1.push(objTipoIdentificacionDTO);
            });


            res.json(new Response200("0k",arr1));
        });
    });
});

module.exports=generalImpl;