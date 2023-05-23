import express from 'express'
import cors from 'cors'
import {createServer } from "http"
import { Server } from "socket.io";

export class ServerClass {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app)
        this.io = new Server(this.server);

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {

    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}