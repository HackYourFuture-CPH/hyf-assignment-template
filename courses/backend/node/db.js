import knex from 'knex';

const isProduction = process.env.NODE_ENV === 'production';
const dbFile = "PATH_TO_YOUR_SQLITE_DB";
const config = isProduction
    ? {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
    }
    : {
        client: 'sqlite3',
        connection: {
            filename: process.env.DB_FILENAME || dbFile,
        },
        useNullAsDefault: true,
    };

const db = knex(config);

export default db;