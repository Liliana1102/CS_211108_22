import express from 'express';
import { api } from './config/config.js';
import user from './router/user.js';
import father from './router/father.js';
import son from './router/son.js';
import imagen from './router/imagenes.js';

const app = express();

app.use('/api/user', user);
app.use('/api/father', father);
app.use('/api/imagenes', imagen);
app.use('/api/son', son);


app.listen(api.port, () => {
    console.log('servidor corriendo en el puerto => ', api.port)
});