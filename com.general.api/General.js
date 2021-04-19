const generalImpl=require('../com.general.impl/GeneralImpl')
const configuracion=require('../com.general.configuracion/Configuracion')
const cf=new configuracion();
const app=cf.configuracion();

//Router General del sistema /general/
app.use('/general',generalImpl);

app.listen(app.get('port'),()=>{
    console.log("Esta corriendo en el puerto ",app.get('port'));
});