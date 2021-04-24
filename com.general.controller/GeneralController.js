
const GeneralDao = require("../com.general.dao/GeneralDao");
const BOException = require("../com.general.exception/BOException");
const Response400 = require("../com.general.dto/Response400");
const Response500 = require("../com.general.dto/Response500");


class GeneralController {
    
    constructor() {
	}

    consultaTiposIdentificacionController(req,res,callback){
        var generalDao=new GeneralDao();
        generalDao.consultaTiposIdentificacionDao(req,res,function(r){
            return callback(r);
        });
    }

    consultaGeneroController(req,res,callback){
        var generalDao=new GeneralDao();
        generalDao.consultaGeneroDao(req,res,function(r){
            return callback(r);
        });
    }

    consultaPaisController(req,res,callback){
        var generalDao=new GeneralDao();
        generalDao.consultaPaisDao(req,res,function(r){
            return callback(r);
        });
    }

    consultaCiudadController(req,res,callback){
    
        try{

            var secuenciaPais = req.params.secuenciaPais;
            var secuenciaProvincia = req.params.secuenciaProvincia;

            //Valida que el campo secuenciaPais no sea null o vacio
            if(secuenciaPais==null || secuenciaPais=="" || secuenciaPais<=0 || secuenciaPais==undefined){
                throw new BOException("La secuencia de pais es requerido.");
            }

            //Valida que el campo secuenciaProvincia no sea null o vacio
            if(secuenciaProvincia==null || secuenciaProvincia=="" || secuenciaProvincia<=0 || secuenciaProvincia==undefined){
                throw new BOException("La secuencia de la provincia es requerido.");
            }

           var generalDao=new GeneralDao();
            generalDao.consultaCiudadDao(req,res,function(r){
                return callback(r);
            });

        }catch(err){

            if (err instanceof BOException) {
                return res.send(new Response400(err.message,null));
            }else{
                return res.send(new Response500(err.message,err));
            }
            
        }
    }

    consultaProvinciaController(req,res,callback){
    
        try{

            var secuenciaPais = req.params.secuenciaPais;

            //Valida que el campo secuenciaPais no sea null o vacio
            if(secuenciaPais==null || secuenciaPais=="" || secuenciaPais<=0 || secuenciaPais==undefined){
                throw new BOException("La secuencia de pais es requerido.");
            }

           var generalDao=new GeneralDao();
            generalDao.consultaProvinciaDao(req,res,function(r){
                return callback(r);
            });

        }catch(err){

            if (err instanceof BOException) {
                return res.send(new Response400(err.message,null));
            }else{
                return res.send(new Response500(err.message,err));
            }
            
        }
    }
}
module.exports = GeneralController;