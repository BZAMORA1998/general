class Tool {
    constructor() {
	}

    tool() {

        const express=require("express");
        const mysql=require("mysql");
        const myconn=require("express-myconnection");
        const app=express();
        const cors = require('cors');

        //Variable de conexion a la base de datos
        const dbOptions={
            host:'db4free.net',
            port:'3306',
            user:'zamora',
            password:'25021998bszl_',
            database:'sistemas2020'
        }

        //Conecta con la base de datos
        app.use(myconn(mysql,dbOptions,'single'));

        //Configura el cors
        app.use(cors())

        //Declara en que puerto de quiere trabajar
        app.set('port',process.env.PORT||9090)

        return app;

	} 
}

module.exports = Tool;