const express=require("express");
const mysql=require("mysql");
const myconn=require("express-myconnection");
const app=express()
const generalImpl=require('../com.general.impl/GeneralImpl')

app.set('port',process.env.PORT||9000)
const dbOptions={
    host:'db4free.net',
    port:'3306',
    user:'zamora',
    password:'25021998bszl_',
    database:'sistemas2020'
}

app.use(myconn(mysql,dbOptions,'single'));

app.use('/general',generalImpl);

app.listen(app.get('port'),()=>{
    console.log("Esta corriendo en el puerto ",app.get('port'));
});