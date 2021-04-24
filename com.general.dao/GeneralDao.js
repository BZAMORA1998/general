
const TipoIdentificacionDTO = require("../com.general.dto/TipoIdentificacionDTO");
const GeneroDTO=require("../com.general.dto/GeneroDTO");

class GeneralDao {
    
    constructor() {
        
	}

    consultaTiposIdentificacionDao(req,res,callback){
        req.getConnection((err,conn)=>{
            if(err)return res.send(err);

            let query="SELECT *FROM tbl_tipos_identificacion";

            conn.query(query,(err,rows)=>{
                if(err)return res.send(err.sqlMessage);

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
    }

    consultaGeneroDao(req,res,callback){
        req.getConnection((err,conn)=>{
            if(err)return res.send(err);

            let query="SELECT *FROM tbl_generos";

            conn.query(query,(err,rows)=>{
                if(err)return res.send(err.sqlMessage);

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
    }
}
module.exports = GeneralDao;