
const TipoIdentificacionDTO = require("../com.general.dto/TipoIdentificacionDTO");
const GeneroDTO=require("../com.general.dto/GeneroDTO");
const PaisDTO=require("../com.general.dto/PaisDTO");
const ProvinciaDTO=require("../com.general.dto/ProvinciaDTO");
const CiudadDTO=require("../com.general.dto/CiudadDTO");
const Response500 = require("../com.general.dto/Response500");

class GeneralDao {
    
    constructor() {
        
	}

    consultaTiposIdentificacionDao(req,res,callback){
        try{
            req.getConnection((err,conn)=>{
                if(err)return res.send(new Response500(err.message,err));

                let query="SELECT *FROM tbl_tipos_identificacion"
                        +" WHERE pa.es_activo='S'";

                conn.query(query,(err,rows)=>{
                    if(err)return res.send(new Response500(err.sqlMessage,err));

                    var arr1 = new Array();
                    
                    var data=JSON.parse(JSON.stringify(rows))

                    data.forEach(r=>{
                        var objTipoIdentificacionDTO=new TipoIdentificacionDTO(
                            r.SECUENCIA_TIPO_IDENTIFICACION,
                            r.nombre ,
                            r.es_activo);
                        arr1.push(objTipoIdentificacionDTO);
                    });
                    return callback(arr1);
                });
            });
        }catch(err){
            return res.send(new Response500(err.message,err)); 
        }
    }

    consultaGeneroDao(req,res,callback){
        try{
            req.getConnection((err,conn)=>{
                if(err)return res.send(new Response500(err.message,err));

                let query="SELECT *FROM tbl_generos"
                        +" WHERE pa.es_activo='S'";

                conn.query(query,(err,rows)=>{
                    if(err)return res.send(new Response500(err.sqlMessage,err));

                    var arr1 = new Array();
                    
                    var data=JSON.parse(JSON.stringify(rows))

                    data.forEach(r=>{
                        var objGeneroDTO=new GeneroDTO(
                            r.SECUENCIA_GENERO,
                            r.nombre ,
                            r.es_activo);
                        arr1.push(objGeneroDTO);
                    });
                    return callback(arr1);
                });
            });
        }catch(err){
            return res.send(new Response500(err.message,err)); 
        }
    }

    consultaPaisDao(req,res,callback){
        try{
            req.getConnection((err,conn)=>{
                if(err)return res.send(new Response500(err.message,err));

                let query="SELECT * FROM  tbl_pais pa "
                        +" WHERE pa.es_activo='S'";

                conn.query(query,(err,rows)=>{
                    if(err)return res.send(new Response500(err.sqlMessage,err));

                    var arr1 = new Array();
                    
                    var data=JSON.parse(JSON.stringify(rows))

                    data.forEach(r=>{
                        var objPaisDTO=new PaisDTO(
                            r.secuencia_pais,
                            r.nombre);
                        arr1.push(objPaisDTO);
                    });
                    return callback(arr1);
                });
            });
        }catch(err){
            return res.send(new Response500(err.message,err)); 
        }
    }

    consultaProvinciaDao(req,res,callback){
        try{
            req.getConnection((err,conn)=>{
                if(err)return res.send(new Response500(err.message,err));

                let query="SELECT * FROM  tbl_provincia pa "
                        +" WHERE pa.es_activo='S'"
                        +" AND pa.secuencia_pais="+req.params.secuenciaPais;

                conn.query(query,(err,rows)=>{
                    if(err)return res.send(new Response500(err.sqlMessage,err));

                    var arr1 = new Array();
                    
                    var data=JSON.parse(JSON.stringify(rows))

                    data.forEach(r=>{
                        var objProvinciaDTO=new ProvinciaDTO(
                            r.secuencia_provincia,
                            r.nombre);
                        arr1.push(objProvinciaDTO);
                    });
                    return callback(arr1);
                });
            });
        }catch(err){
            return res.send(new Response500(err.message,err)); 
        }
    }

    consultaCiudadDao(req,res,callback){
        try{
            req.getConnection((err,conn)=>{
                if(err)return res.send(new Response500(err.message,err));

                let query="SELECT * FROM  tbl_ciudad pa "
                        +" WHERE pa.es_activo='S'"
                        +" AND pa.secuencia_pais="+req.params.secuenciaPais
                        +" AND pa.secuencia_provincia="+req.params.secuenciaProvincia;

                conn.query(query,(err,rows)=>{
                    if(err)return res.send(new Response500(err.sqlMessage,err));

                    var arr1 = new Array();
                    
                    var data=JSON.parse(JSON.stringify(rows))

                    data.forEach(r=>{
                        var objCiudadDTO=new CiudadDTO(
                            r.secuencia_ciudad,
                            r.nombre);
                        arr1.push(objCiudadDTO);
                    });
                    return callback(arr1);
                });
            });
        }catch(err){
            return res.send(new Response500(err.message,err)); 
        }
    }
}
module.exports = GeneralDao;