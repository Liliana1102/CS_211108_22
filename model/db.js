import pkg from 'pg';
const { Pool } = pkg;
import { db } from '../config.js';

import Sequelize from 'sequelize';

async function getConnection() {
    const client = new Pool({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port,
    });
    await client.connect();
    return client;
} 
const SequelizeClient = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'postgres',
});

SequelizeClient.authenticate()

    .then (() =>{
        console.log('Conectado')
    })
    .catch (() =>{
        console.log('No se conecto')
    });
export const getData = {getConnection, SequelizeClient};