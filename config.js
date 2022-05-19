const { port } = require("pg/lib/defaults");

module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
        

    },
    db: {
        user: 'postgres',
        host: 'localhost',
        database: 'CSDB',
        password: '1106200222',
        port: '5432'
    }
    
}