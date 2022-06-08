//Depedencias
import express from 'express';
import cors from 'cors';

//Importaciones
import { api } from '../config.js';
import user from './components/user/network.js';

//Inicializaciones dependencias
const app = express(); 

//Routers
app.use('/api/user', user);

app.use(cors({ origin: true, credentials: false }));

app.listen( api.port, () => {
    console.log(`Servidor corriendo en el puerto => ${api.port}`);
});