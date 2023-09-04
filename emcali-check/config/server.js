const express = require('express');
const cors = require('cors');
const cron = require("cron");
const { connectDb } = require('../data/conexion');

// const { dbConnection } = require('../database/config');

class Server {

    constructor() {

        this.cron = cron;
        this.app  = express();
        this.port = process.env.PORT;
        this.peticionesPath = '/auth';
        this.intervalPath = '/stop';
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
        
    }

    async conectarDB() {
        await connectDb();

    }


    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes() {      
        this.app.use( this.peticionesPath, require('../routes/peticiones'));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });

    }

}


module.exports = Server;
