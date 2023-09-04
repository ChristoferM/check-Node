const { response, request } = require('express');
const moment = require('moment');

const configuracionApps = require("../models/cornDataModel");
const InfoEndpoint = require('../models/infoEndpoint');
const { llamarEndPoint } = require('../middlewares/apiResquest');
const { sequelize } = require('../data/conexion');

const intervalosActivos = new Map();

async function ejecutarCron(datosConfiguracionAplicacion) {
    console.log('CRON  consultando a ' + datosConfiguracionAplicacion.endpoint);
    // Obtén la hora de inicio del proceso
    const horaInicio = moment().format('YYYY-MM-DD HH:mm:ss');
    const response = await llamarEndPoint(datosConfiguracionAplicacion.endpoint)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('Error al llamar a la API:', error);
        });
    // Obtén la hora de finalización del proceso
    const horaFinalizacion = moment().format('YYYY-MM-DD HH:mm:ss');


    console.log("-----");
    console.log(horaInicio);
    console.log(response);
    console.log(horaFinalizacion);
    guardarRespuestaApp(response, horaInicio, horaFinalizacion, datosConfiguracionAplicacion.id)
    console.log("-----");



}
const guardarRespuestaApp = async (datos, hora_peticion, hora_respuesta, id_app) => {
    try {
        console.log('*******************');
        console.log('Intentando guardar');
        console.log('====================================!!!');
        console.log(datos, hora_peticion, hora_respuesta, id_app);
        console.log('====================================');
        
        
        await sequelize.authenticate();
        const registro = await InfoEndpoint.create( {
            id_app: id_app,
            hora_peticion: hora_peticion,
            hora_respuesta: hora_respuesta,
            estado_respuesta: datos.status === 200? true:false ,
            data: datos.data === undefined ? JSON.stringify(datos.statusText):JSON.stringify(datos.data),
            estado: datos.status,
        });
        console.log('OKOKO');
        return registro;

    } catch (error) {
        console.error('Error al conectar a la BD:', error);
    }


}
const peticionesGet = async (req = request, res = response) => {
    const { id } = req.params;
    console.log('log id ' + id);



    const datos = await configuracionApps;
    const appEject = datos.find(item => item.id === Number(id));

    // Ejecuta la función CRON
    const intervalId = setInterval(() => ejecutarCron(appEject), Number(appEject.recurrencia_positiva) * 1000);
    // Almacena el identificador del intervalo en la estructura de datos
    intervalosActivos.set(id, intervalId);



    res.status(200).send({
        msg: 'Controles Config Peticiones'
    });
};
// Función para detener un intervalo específico
const detenerIntervalo = async (req = request, res = response) => {
    const { id } = req.params;
    console.log('====================================');
    console.log(detenerIntervalo);
    console.log('====================================');
    const intervalId = intervalosActivos.get(id);
    if (intervalId) {
        clearInterval(intervalId);
        intervalosActivos.delete(id);
        console.log(`Intervalo para el cliente ${id} detenido.`);
        res.status(200).send({
            msg: `Intervalo para el cliente ${id} detenido.`
        });
    } else {
        console.log(`Intervalo para el cliente ${id} no encontrado.`);
        res.status(507).send({
            msg: `Intervalo para el cliente ${id} no encontrado.`
        });
    }
}
//const message = await obtenerData();
const obtenerData = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión existente.');

        // Consulta para obtener todos los registros
        const registros = await InfoEndpoint.findAll();
        return registros;
        // console.log(registros); // Muestra los registros obtenidos

    } catch (error) {
        console.error('Error al conectar a la BD:', error);
    }
}
const tabla = async () => {
    await InfoEndpoint.sync();
    console.log("The table for the InfoEndpoint model was just (re)created!");
}
module.exports = {
    peticionesGet,
    detenerIntervalo
}
