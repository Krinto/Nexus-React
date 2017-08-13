var config = {
    development: {
        //mongodb connection settings
        database: {
            host:       '192.168.1.31',
            port:       '27017',
            db:         'nexus',
            user:       'apiuser',
            password:   'password1234'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    test: {
        //mongodb connection settings
        database: {
            host:       process.env.DB_HOST,
            port:       process.env.DB_PORT,
            db:         process.env.DB_NAME,
            user:       process.env.DB_USER,
            password:   process.env.DB_PASSWORD
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        //mongodb connection settings
        database: {
            host:       process.env.DB_HOST,
            port:       process.env.DB_PORT,
            db:         process.env.DB_NAME,
            user:       process.env.DB_USER,
            password:   process.env.DB_PASSWORD
        },
        //server details
        server: {
            host: process.env.WEB_HOST,
            port: process.env.PORT
        }
    }
};

module.exports = config;