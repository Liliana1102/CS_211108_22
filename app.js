import express from 'express';
import { api } from './config/config.js';
import user from './router/user.js';

const app = express();

app.use('/api/user', user);

app.listen(api.port, () => {
    console.log('servidor corriendo en el puerto => ', api.port)
});