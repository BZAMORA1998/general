
const GeneralDao = require("../com.general.dao/GeneralDao");

class GeneralController {
    
    constructor() {
	}

    consultaTiposIdentificacionController(req,res,callback){
        var generalDao=new GeneralDao();
        generalDao.consultaTiposIdentificacionDao(req,res,function(r){
            return callback(r);
        });
    }
}
module.exports = GeneralController;