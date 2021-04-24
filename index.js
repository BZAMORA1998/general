const generalApi=require('./com.general.api/GeneralApi')
const tool=require('./com.general.tool/Tool')
const cf=new tool();
const app=cf.tool();

//Router General del sistema /general/
app.use('/general',generalApi);

app.listen(app.get('port'),()=>{
    console.log("Esta corriendo en el puerto ",app.get('port'));
});