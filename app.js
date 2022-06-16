import express from 'express';
import { api } from './config/config.js';
import user from './router/user.js';

const app = express();

app.use('/api/user', user);

app.listen(api.port, () => {
    console.log("Servidor cooriendo en el puerto: ", api.port);
});